import sys

with open('src/app/dashboard/meetings/page.tsx', 'r', encoding='utf8') as f:
    c = f.read()

c = c.replace('meeting.videoTitle', 'meeting.video?.title')

find_str = 'className="meeting-view-link">View details'
replace_str = 'className="meeting-view-link">View details <span aria-hidden="true">→</span></Link><button onClick={(e) => handleDelete(meeting.id, e)} className="ml-4 text-slate-400 hover:text-red-600">Delete</button><span className="hidden">'

c = c.replace(find_str, replace_str)

with open('src/app/dashboard/meetings/page.tsx', 'w', encoding='utf8') as f:
    f.write(c)
