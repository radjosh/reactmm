# What this is
react frontend for mm app with go backend

<hr /><hr />

# example setup #####################################

# make host dir
  mkdir radappname; cd radappname

# make share dir to bridge between container and host
  mkdir share 

# spin up image
  docker build -t gomm-image --no-cache .

# run container
  docker run -d -it -p {some port number on your local machine e.g. 8001}:1236 -v /run/host-services/ssh-auth.sock:/ssh-agent -e SSH_AUTH_SOCK='/ssh-agent' -v ./share:/root/share -v ~/.gitconfig:/etc/gitconfig --name gomm-container gomm-image

note that this assumes that you're running ssh-agent to forward ssh keys (for git)
it also assumes that you have a global ~/.gitconfig on the host machine

# inside container
clone/fork repo to /root/share. total kludge

# set up parcel:
  npm install --save-dev parcel
  npm install react react-dom

# run dev server:
  cd root/share
  
  npx parcel src/index.html -p 1236
