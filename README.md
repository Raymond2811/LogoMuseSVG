# LogoMuseSVG [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app is designed to create a simple logo in SVG format based on user input. It's a user-friendly tool for anyone looking to quickly generate a basic logo. During the development process, I encountered some challenges, particularly in understanding the testing procedures and structuring the code. After several long study sessions and some research, I developed a better understanding of how classes work and how to conduct testing effectively. I found certain concepts, like utilizing the switch-case statements and using extends in classes, to be very helpful. One of the smaller, yet somewhat frustrating, issues I encountered was when my shape wouldn't generate. Eventually, I discovered that the issue was related to my use of object destructuring when exporting multiple references in the 'shapes.js' file. To resolve this, I needed to import 'generateShape' as part of an object using object destructuring in the 'index.js' file.

## Usage

This app is incredibly user-friendly. You won't need to search for or edit an image to create your logo; it's as easy as using this application, and you'll have your logo within seconds. To get started, simply open your terminal and navigate to the application's directory or right-click on index.js and select integrated terminal, which is the faster method. Then, type node index.js. A series of questions will appear, and all you need to do is answer them. Once you've completed the last question, the 'logo.svg' file will be generated. 
      
## License
  
This project is licensed under the terms of the MIT License 