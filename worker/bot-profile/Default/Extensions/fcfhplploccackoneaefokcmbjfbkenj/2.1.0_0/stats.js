const GA_MEASUREMENT_ID = 'G-Q6RXBFHP6S';
const GA_API_SECRET = 'muKDJeu2QOG6FY7V_L-wHA';

async function trackEvent(eventName, params = {}) {
    try {
        const storage = await chrome.storage.local.get(['id']);
        const clientId = storage.id || 'anonymous_user';

        const payload = {
            client_id: clientId,
            events: [{
                name: eventName,
                params: {
                    ...params,
                    engagement_time_msec: "100",
                    session_id: Date.now().toString()
                }
            }]
        };

        await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.error('GA Tracking Error:', err);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    trackEvent('alta_install_land_opened');

    document.querySelectorAll('a[href*="t.me/altavpn_bot"]').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('alta_install_tg_clicked');
        });
    });
});