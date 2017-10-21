# ReactNativeDemo

Created with [create-react-native-app](https://github.com/react-community/create-react-native-app) (crna). Demonstrates 
basic instantiations of React Native components, fetch API, image capture
using Expo's [ImagePicker](https://docs.expo.io/versions/latest/sdk/imagepicker.html),
and basic [navigation](https://github.com/react-community/react-navigation).
Feel free to use this as a starting point for your App.

## The Challenge

+ Implement Bar Code Scanning to show product data
+ Use photo capture to leverage Optical Character Recognition (OCR)
  + Capture / display / validate Nutrient Facts Panel
  + Capture / display / validate Ingredient/Warning statements

## Technologies to Consider

#### [react-native-camera](https://github.com/lwansbrough/react-native-camera)
Includes bar code scanner! To use this library you'll have to 
eject from crna, but good news it supports both OSs.

#### [react-native-tesseract-ocr](https://www.npmjs.com/package/react-native-tesseract-ocr)
Unfortunately lacks iOS support. Also requires ejection from crna. Note that 
if your app only supports one OS, that isn't necessarily a deal breaker, how
if another app of equal quality _did_, well...

#### [Google Cloud Vision API](https://cloud.google.com/vision/)
Offers a free trial. See their OCR tutorial at 
[https://cloud.google.com/functions/docs/tutorials/ocr](https://cloud.google.com/functions/docs/tutorials/ocr). The tutorial is
quite involved and is suitable toward getting started with long term, 
scalable solutions. Depending on the strength of your team / prior experience
with Google Cloud Platform, this _might_ be doable in the time allotted.

#### [Free OCR API](https://ocr.space/ocrapi)
A very straight forward public OCR API. You'll need to sign up for their news letter 
to obtain a free API key (which may take a few minutes, be patient). 
Their endpoints accept an image url or base64 encoding string, which is pretty
convenient.

## Example

## Home Screen
<img width="300" src="etc/Screenshot_2017-10-20-00-40-22.jpg">

## Capture Image Screen
<img width="300" src="etc/Screenshot_2017-10-20-00-42-20.jpg">

## Lookup UPC Screen
<img width="300" src="etc/Screenshot_2017-10-20-00-40-44.jpg">