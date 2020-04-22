## Node.js


- [Node.js v10.x](https://github.com/nodesource/distributions/blob/master/README.md#deb) 

> Using Debian, as root
```
# curl -sL https://deb.nodesource.com/setup_10.x | bash -
# sudo apt-get install -y nodejs

# node --version
v10.20.1

# npm --version
6.14.4
```

## [Installing with npm](https://nodered.org/docs/getting-started/local)

To install Node-RED you can use the npm command that comes with node.js:
> Como usuario regular 'devel1'
```sh
$ sudo npm install -g --unsafe-perm node-red

$ node-red --help
Node-RED v1.0.5
Usage: node-red [-v] [-?] [--settings settings.js] [--userDir DIR]
                [--port PORT] [--title TITLE] [--safe] [flows.json]

Options:
  -p, --port     PORT  port to listen on
  -s, --settings FILE  use specified settings file
      --title    TITLE process window title
  -u, --userDir  DIR   use specified user directory
  -v, --verbose        enable verbose output
      --safe           enable safe mode
  -?, --help           show this help

Documentation can be found at http://nodered.org
```

## [How To Install and Use Docker on Debian 10](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10)


### Install a few prerequisite packages which let apt use packages over HTTPS:

```
$ sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

### Then add the GPG key for the official Docker repository to your system:
```
$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
OK
```

### Add the Docker repository to APT sources:
```
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
```

### Next, update the package database with the Docker packages from the newly added repo:
```
$ sudo apt update
```

### Make sure you are about to install from the Docker repo instead of the default Debian repo:
```
$ apt-cache policy docker-ce
```
> Notice that docker-ce is not installed, but the candidate for installation is from the Docker repository for Debian 10 (buster). 

### Finally, install Docker:
```
$ sudo apt install docker-ce
$ sudo systemctl status docker
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2020-04-21 09:19:18 CEST; 38s ago
     Docs: https://docs.docker.com
 Main PID: 12761 (dockerd)
    Tasks: 9
   Memory: 48.1M
   CGroup: /system.slice/docker.service
           └─12761 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

abr 21 09:19:17 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:17.773630043+02:00" level=warning msg="Your kernel does not support swap memory limit"
abr 21 09:19:17 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:17.774448725+02:00" level=warning msg="Your kernel does not support cgroup rt period"
abr 21 09:19:17 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:17.774635490+02:00" level=warning msg="Your kernel does not support cgroup rt runtime"
abr 21 09:19:17 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:17.775019943+02:00" level=info msg="Loading containers: start."
abr 21 09:19:18 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:18.627214712+02:00" level=info msg="Default bridge (docker0) is assigned with an IP addres
abr 21 09:19:18 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:18.775373265+02:00" level=info msg="Loading containers: done."
abr 21 09:19:18 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:18.825721063+02:00" level=info msg="Docker daemon" commit=afacb8b7f0 graphdriver(s)=overla
abr 21 09:19:18 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:18.826095916+02:00" level=info msg="Daemon has completed initialization"
abr 21 09:19:18 vbxdeb10mate dockerd[12761]: time="2020-04-21T09:19:18.882725564+02:00" level=info msg="API listen on /var/run/docker.sock"
abr 21 09:19:18 vbxdeb10mate systemd[1]: Started Docker Application Container Engine.
lines 1-20/20 (END)

```

### If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:
```
$ sudo usermod -aG docker ${USER}
```
> CERRAR SESION Y VOLVER A ENTRAR
```
$ id -nG
devel1 cdrom floppy audio dip video plugdev netdev bluetooth docker
```

```
$ sudo systemctl enable docker
Synchronizing state of docker.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable docker

$ docker version
Client: Docker Engine - Community
 Version:           19.03.8
 API version:       1.40
 Go version:        go1.12.17
 Git commit:        afacb8b7f0
 Built:             Wed Mar 11 01:25:56 2020
 OS/Arch:           linux/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.8
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.17
  Git commit:       afacb8b7f0
  Built:            Wed Mar 11 01:24:28 2020
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.2.13
  GitCommit:        7ad184331fa3e55e52b890ea95e65ba581ae3429
 runc:
  Version:          1.0.0-rc10
  GitCommit:        dc9208a3303feef5b3839f4323d9beb36df0a9dd
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683

```