<h1 align="center" style="display:flex;align-items:center;justify-content:center;">
  Remotis
</h1>

<p  align="center">
  <a  href="https://github.com/dominickbrasileiro/remotis/commits/main">
    <img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/dominickbrasileiro/remotis?color=282A36&style=for-the-badge">
  </a>

  <img  alt="License"  src="https://img.shields.io/badge/license-MIT-282A36?&style=for-the-badge">
</p>

# 📌 Summary

* [Introduction](#-introduction)
* [How to Run](#-how-to-run)
* [Contribution, Bugs and Issues](#-contribution-bugs-and-issues)
* [License](#-license)

# 📎 Introduction

Remotis is a reverse SSH tunneling script, it uses OpenSSH to create an [Loopback Interface](https://en.wikipedia.org/wiki/Loopback) between your local device and a remote server, then all the traffic will be forwarded to it. You can use Remotis to access some port of your server without exposing it to the internet.

# 🚀 How To Run

To clone and run this application, you'll need [Git](https://git-scm.com), [OpenSSH](https://www.openssh.com), [Node.js](https://nodejs.org/en) and [Yarn](https://yarnpkg.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dominickbrasileiro/remotis

# Go into the repository
$ cd remotis

# Create enviroment file
$ cp .env.example .env

# Set enviroment variables
$ vim .env

# Install dependencies
$ yarn install

# Run the script
$ yarn start
```

Runs the Reverse SSH Tunnel.

# 👪 Contribution, Bugs and Issues

Feel free to open new issues and colaborate with others issues in [Remotis Issues](https://github.com/dominickbrasileiro/remotis/issues).

# 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/dominickbrasileiro/remotis/blob/main/LICENSE) for more information.

---

Made with ❤️ by Dominick Brasileiro 💎 [Get in touch!](https://www.linkedin.com/in/dominickbrasileiro/)

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dominickbrasileiro/)](https://www.linkedin.com/in/dominickbrasileiro/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brasileiro.dominick@gmail.com)](mailto:brasileiro.dominick@gmail.com)
