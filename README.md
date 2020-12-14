## $5 Tech Unlocked 2021!
[Buy and download this Book for only $5 on PacktPub.com](https://www.packtpub.com/product/hands-on-blockchain-development-in-7-days/9781838640101)
-----
*If you have read this book, please leave a review on [Amazon.com](https://www.amazon.com/gp/product/183864010X).     Potential readers can then use your unbiased opinion to help them make purchase decisions. Thank you. The $5 campaign         runs from __December 15th 2020__ to __January 13th 2021.__*

# Hands-On Blockchain Development in 7 Days

<a href="https://www.packtpub.com/big-data-and-business-intelligence/hands-blockchain-development-7-days?utm_source=github&utm_medium=repository&utm_campaign=9781838640101 "><img src="https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B14101_1.png" alt="Hands-On Blockchain Development in 7 Days" height="256px" align="right"></a>

This is the code repository for [Hands-On Blockchain Development in 7 Days](https://www.packtpub.com/big-data-and-business-intelligence/hands-blockchain-development-7-days?utm_source=github&utm_medium=repository&utm_campaign=9781838640101 ), published by Packt.

**Create a decentralized gaming application using Ethereum**

## What is this book about?
Blockchain is a revolutionary technology that is currently been used in a variety of industrial applications, such as finance, healthcare, data analytics, and much more. This book will teach you the key blockchain principles and methodologies that are required to build decentralized applications in just 7 days.

This book covers the following exciting features:
* Work with blockchain networks to create interactive applications 
* Learn how to create and use variables in smart contracts 
* Use automated tests to eliminate mistakes and errors in the code 
* Interact with the Ethereum network from a user interface 
* Build a user interface for smart contracts using React 
* Send and receive funds in smart contracts using wallets 
* Deploy blockchain applications on AWS 

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1-838-64010-X) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is present in the master branch and code for the assignments of each day have been added as branches.

The code will look like the following:
```
function foo() public returns
(string) {
    return "Hello";
}

function bar() external {
    foo_ = foo(); //Not valid
    foo_ = this.foo(); //Valid
}
```

**Following is what you need for this book:**
This book is for software engineers and IT professionals, who are eager to learn blockchain application development skills and want to master how blockchain applications are developed. This book is perfect for those with limited programming experience.	

With the following software and hardware list you can run all code files present in the book (Chapter 1-7).
### Software and Hardware List
| Chapter | Software required | OS required |
| -------- | ------------------------------------ | ----------------------------------- |
| All | Ganache  | Windows, Mac OS X, and Linux (Any) |
| All | Truffle framework | Windows, Mac OS X, and Linux (Any) |
| All | Python version 2.7 and above | Windows, Mac OS X, and Linux (Any) |
| All | Geth | Windows, Mac OS X, and Linux (Any) |
| All | MetaMask | Windows, Mac OS X, and Linux (Any) |

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](http://www.packtpub.com/sites/default/files/downloads/9781838640101_ColorImages.pdf).

# Installation
1. Install node.js (version 10.15.0)

1. Install webpack globally
    ```
    npm install -g webpack
    npm install -g webpack-cli
    ```

1. Install npm dependencies
   ```
   npm install
   ```

1. Install truffle and Ganache, both available from [Truffle](https://truffleframework.com/).

1. Compile and migrate the contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

1. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm start
    ```

## Docker

1. Build the docker container.
    ```
    docker build -t etherslist .
    ```

1. Launch the docker container.
    ```
    docker run -p 3000:3000 etherslist:latest
    ```

1. Browse to http://localhost:3000

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.

### Related products
* Learning Blockchain Application Development [Video] [[Packt]](https://www.packtpub.com/application-development/learning-blockchain-application-development-video?utm_source=github&utm_medium=repository&utm_campaign=9781789345728 ) [[Amazon]](https://www.amazon.com/dp/1-789-34572-3)

* Blockchain Application Development in 7 Days [Video] [[Packt]](https://www.packtpub.com/application-development/blockchain-application-development-7-days-video?utm_source=github&utm_medium=repository&utm_campaign=) [[Amazon]](https://www.amazon.com/dp/1-789-34194-9)

## Get to Know the Author
**Will Button**
 works with web, mobile, and blockchain start-ups in advisory and technical roles. As an advisor, he helps organizations scale securely and sustainably. As a technical expert, he helps organizations build the processes, systems, and teams necessary to deliver world-class services and applications to their customers. Since 1995, Will has used his experience with multiple successful start-ups to create over 150 videos on DevOps, software engineering, and blockchain application development. He is a certified Ethereum developer, and holds the Linux Foundation Blockchain for Business certificate. He is the lead of the Application Architecture Working Group for the Government Blockchain Alliance. For more information, visit his blog.



### Suggestions and Feedback
[Click here](https://docs.google.com/forms/d/e/1FAIpQLSdy7dATC6QmEL81FIUuymZ0Wy9vH1jHkvpY57OiMeKGqib_Ow/viewform) if you have any feedback or suggestions.


