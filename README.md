# starWarsFunClubClient
React native app for star wars fun club

Important: This app is created using expo for easier and faster setting up on machies. Node.js version 12 or higher must be installed for this project to run. Also phone is being used for testing it must be connected to same wireless network as computer on which the server project is run

Setting up the project:

1. If expo CLI was never installed it must be installed from terminal with command
    npm install -g expo-cli 

    If it fails because of permissions run command  
    
    sudo npm install -g expo-cli

2.Create folder where you want to clone the project. 

3. Checkout project in terminal (git bash, cmd...) with command 
    git clone https://github.com/fever2288/starWarsFunClubClient.git

4. In terminal go to cloned project and install dependencies with npm install

5. There is config.js file in root of the project where PORT and IP adress must be set. The PORT number is PORT number that is used when running server project (Check the README.md in server project for info)

6. Getting IP adress depending on system that is running the project. On WINDOWS in terminal run command ipconfig. IP address will be listed. Usually, it will say IPv4 Address and follow the prefix 192.168.1.# or 192.168.0.#. On MAC the fastest way to find this information is by opening the Apple menu, and then heading to System Preferences > Network. Select your network connection, and then click “Advanced.” IP address information is on the “TCP/IP” tab.

7. After entering IP adress and port into config.js, project can be started in terminal, from root of the project, with command 

expo start

8. There are several ways to run the app. In step 7 there will be line that says on which port is expo dev tools are running (something like  Expo DevTools is running at http://localhost:19003). Visiting that link in browser will present you with several options:
Run in web browser - which will run app in desktop browser. 
Downloading expo client app on the phone from iOS or Android store. Hitting 'Sqan QR Code' in the app on Android and scanning QR code that is in the browser, or in terminal where app has been run, will load app on the mobile phone. On iOS phones any QR scanar will work, since expo app doesn't have it. The mobile phone and computer running the project must be on the same wifi network.