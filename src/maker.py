import os
s = [
    # "Learn",
    # "Discover",
    # "Badges",
    # "Friends",
    "Login",
    "Register"
]
lasd = []
cwd = os.getcwd()
screen_path = '/home/samarth/Documents/React-Native-Projects/Plezmo/src/Screens'
lines = []
with open('/home/samarth/Documents/React-Native-Projects/Plezmo/src/index.js','r') as file:
    lines = file.readlines()

for i in s:
    os.makedirs(os.path.join(screen_path,i))
    lasd.append(os.path.join(screen_path,i))
for i in range(4):
    with open(os.path.join(lasd[i],'index.js'),'w') as file1:
        lines[3] = f"const {s[i]} = (props) => {'{'}"
        for i in lines:
            file1.write(i)



