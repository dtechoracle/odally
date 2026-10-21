import sys

with open('src/app/dashboard/meetings/page.tsx', 'r', encoding='utf8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'className="meeting-view-link"' in line:
        new_lines.append('                      <Link href={`/dashboard/meetings/${meeting.id}`} className="meeting-view-link">View details <span aria-hidden="true">→</span></Link><button onClick={(e) => handleDelete(meeting.id, e)} className="ml-4 text-slate-400 hover:text-red-600">Delete</button>\n')
    else:
        new_lines.append(line)

with open('src/app/dashboard/meetings/page.tsx', 'w', encoding='utf8') as f:
    f.writelines(new_lines)
