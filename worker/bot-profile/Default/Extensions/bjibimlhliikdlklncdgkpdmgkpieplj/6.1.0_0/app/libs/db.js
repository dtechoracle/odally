/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const DB_NAME = 'Vmaker-Auto-Save';
const DB_VERSION = 1
const STORE_NAME = 'Vmaker-Records';

const db = {
    instance: null,
    init: () => {
        return new Promise(
            (resolve, _reject) => {
                const req = indexedDB.open(DB_NAME, DB_VERSION);
                req.onsuccess = (e) => {
                    db.instance = req.result;
                    resolve(req.result)
                }
                req.onerror = (e) => {
                    updateLogs('error', `db.init.error - ${e.target.errorCode}`);
                    _reject(e)
                }
                req.onupgradeneeded = (e) => {
                    updateLogs('info', `db.init.onupgradeneeded`);
                    e.currentTarget.result.createObjectStore(STORE_NAME, {
                        keyPath: 'dataId'
                    })
                }
            }
        )
    },
    transaction: (store, mode) => {
        return db.instance.transaction(store, mode).objectStore(store)
    },
    createBlob: (obj) => {
        return new Promise(
            (resolve, _reject) => {
                if (!db.transaction) {
                    db.init();
                    setTimeout(() => {
                        db.createBlob(obj)
                    }, 1000)
                } else {
                    const blobStore = db.transaction(STORE_NAME, 'readwrite')
                    const request = blobStore.add(obj)
                    request.onsuccess = (e) => {
                        resolve(e.target.result)
                    }
                }
            }
        )
    },
    deleteBlob: (dataId) => {
        return new Promise(
            (resolve, _reject) => {
                if (!db.transaction) {
                    db.init();
                    setTimeout(() => {
                        db.deleteBlob(dataId)
                    }, 1000)
                } else {
                    const blobStore = db.transaction(STORE_NAME, 'readwrite')
                    const request = blobStore.delete(dataId);
                    request.onsuccess = (e) => {
                        resolve(e.target.result)
                    };
                    request.onerror = (event) => {
                        updateLogs('error', `${dataId} key is not deleted in DB`);
                    };
                }
            }
        )
    },
    getData: (dataId) => {
        return new Promise(
            (resolve, _reject) => {
                if (db.transaction) {
                    const blobStore = db.transaction(STORE_NAME, 'readwrite')
                    const request = blobStore.get(dataId);
                    request.onsuccess = (e) => {
                        resolve(e.target.result)
                    }
                    request.onerror = (e) => {
                        resolve(null)
                    };
                }
            }
        )
    },
    updateData: (data, dataId) => {
        return new Promise(
            (resolve, _reject) => {
                if (db.transaction) {
                    const blobStore = db.transaction(STORE_NAME, 'readwrite')
                    const request = blobStore.put(data, dataId)
                    request.onsuccess = (e) => {
                        resolve(e.target.result)
                    }
                }
            }
        )
    },
    getAllData: () => {
        return new Promise(
            (resolve, _reject) => {
                const blobStore = db.transaction(STORE_NAME, 'readwrite')
                const request = blobStore.getAll()
                request.onsuccess = (e) => {
                    resolve(e.target.result)
                }
            }
        )
    },
    clearBlobs: () => {
        return new Promise(
            (resolve, _reject) => {
                const blobStore = db.transaction(STORE_NAME, 'readwrite')
                const request = blobStore.clear()

                request.onsuccess = (e) => {
                    updateLogs('info', `db.clearBlobs.success`);
                    resolve(e.target.result)
                }
            }
        )
    }
}
db.init();