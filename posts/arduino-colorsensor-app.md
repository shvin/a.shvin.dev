---
title: "Color Sensor Application"
subtitle: "IoT arduino solution to color recognition for the visually impaired"
date: "2023-03-13"
---

### [src/stack]
- https://github.com/liOscar58/acs-app
- Arduino, React, C, JavaScript

## What is this?
This device is a portable fullstack solution to determining colors for the visually impaired. By utilizing an Arduino ESP32 (WiFi) & Adafruit Color Sensor, paired with a custom-built frontend, the sensor data is handled and a color is determined/read aloud to the user. 

This is primarily intended for those who are colorblind or blind allowing them to point the device at whatever color they are trying to determine and the website would read the color out on the device speaker. This project was thought of and started development during the Hack the Hill 2023 hackathon at my university. 

### How it Works:
![flowchart](https://i.imgur.com/6yQgpO8.png)
The Arduino ESP32 has WiFi capabilities allowing us to use the device to send HTTP POST requests to our frontend site. The frontend site utilizes 1 API and the browser's speechsynthesis module.
- [thecolorapi](https://www.thecolorapi.com/) - 
used for converting the RGB value sent from the arduino to a color description word such as cerulean

Integrating the color sensor on the software side of things was extremely simple as it only took 2 option fields for setup and dialing in. 

```C
Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_300MS, TCS34725_GAIN_4X);
```

We were able to utilize the sensor's `getRGB()` function and map them to output that was quickly readable by our frontend.

```C
for(int i = 0; i<5 ; i++){
    float r,g,b;
    tcs.getRGB(&r,&g,&b);
    int R,G,B;
    R = round(r);
    G = round(g);
    B = round(b);
    rgbString = String(R)+","+String(G)+","+String(B);
    Serial.println(rgbString);
    delay(1000);
}
```

### Whats in Store:
To complete this small IoT device, we want to 3D print an enclosure for the board and sensor while being hooked up to a small battery and button to make it a completely wireless accessory to identify colors. 

One way we could complete this path would be to custom print a pcb that is able to be connected to a battery, and small bluetooth unit and soldering the color sensor directly onto the small pcb allowing it to be even smaller. 

### Getting Started
> create from scratch: npm using `create-react-app`

```bash
git clone https://github.com/liOscar58/acs-app.git
```

clone the repo into your drive

```bash
npm install
```

install the necessary components and packages

```bash
npm run start
```

run the dev server on `localhost:3000`.
