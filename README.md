# Microservices Playground!
This is a simple illustration of how to build, deploy and scale (locally) microservices using Docker and Nginx

## Installation
Depending on what OS you are on your this step would be a little different.
On MacOS (Homebrew) simply run the following to install docker

    $ brew install docker
If that's not the case for you go ahead and download and install docker [here](https://www.docker.com/products/docker-desktop/)
Next up clone the rep

    $ git clone https://github.com/Alfred-Onuada/tv-shows-microservice.git tv_shows

## Running the App
Once docker has been installed move into the directory

    $ cd tv_shows
Locate the file `nginx.conf` in the `config\nginx` directory and change the ip address on line 4 to 6 to your own ip address you can get that via `ipconfig` or `ifconfig`

Run the app

    $ docker compose up
And when you're done playing around delete the containers and stop docker using

    $ docker compose down

Thanks for coming this far, leave a star if it helped you and you can open an issue or pull request if you have something to contribute. 👍🏽
    
