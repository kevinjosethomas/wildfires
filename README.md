# 🔥 wildfires

Wildfires is a web interface that visualizes all historic wildfires in the United States via a heatmap. Similarly, it provides
a prediction model that estimates the size of future wildfires based on location and time of the year. You can watch a video of me
demoing the project after The Boreal Express [here](https://youtu.be/hiG3fYq3xUU?si=9fNdulXeWHfX3xEw&t=435).

## The Boreal Express
I developed wildfires aboard [The Boreal Express](https://boreal.hackclub.com/), an exclusive Hack Club hackathon with 50
high school developers around the world. The 7-day hackathon was going to happen aboard a train from Vancouver, BC to Montreal, QC.
Unfortunately, during our journey, wildfires in Western Canada had reached the beautiful town of [Jasper](https://globalnews.ca/news/10642975/jasper-alberta-wildfire-july-25/)
and we decided to turn the train back around. We spent the next 5 days aboard the VIA Rail train at Vancouver's Pacific Central Station,
where we continued to hack and build projects connected to the theme of 'Environment'. Fortunately, the Jasper wildfires have now concluded
and the town is being rebuilt. Here are a few pictures taken by Hack Clubbers on our train:

<img width="412" alt="image" src="https://github.com/user-attachments/assets/6dc3241e-5e46-46f0-a3dc-ad99a6bd9796">
<img width="412" alt="image" src="https://github.com/user-attachments/assets/74121bc4-771a-42b4-8a70-88f40d03da50">

Being able to see these terrifying wildfires, especially this close to home, was quite frightening. At night, every few
minutes on the train, we would end up seeing another spotfire–dozens of flaming trees illuminating the night sky. This experience
inspired me to make this project. Here are a few screenshots of the heatmap and prediction model:

<img width="2000" alt="image" src="https://github.com/user-attachments/assets/7f84c4f1-457a-4129-8efe-04fea48ffab5">
<img width="412" alt="image" src="https://github.com/user-attachments/assets/1b289b8a-54c5-4283-98bc-3dd5e72d21fd">
<img width="412" alt="image" src="https://github.com/user-attachments/assets/8f39cd4f-ddfb-4cbb-9ec3-14141a3a005a">

## How It Works
All data visualized on the heatmap is from the following Kaggle dataset: [1.88 Million US Wildfires](https://www.kaggle.com/datasets/rtatman/188-million-us-wildfires). It's visualized on the NextJS frontend using the Mapbox and Deck.GL. All data is fetched from a Python Flask backend. Similarly, the predictions are enabled by a Random Forest model I trained, which is also served by the Flask API backend. The code for the different components are as follows:
- [``src/backend``](https://github.com/kevinjosethomas/wildfires/tree/main/src/backend): Python Flask API with endpoints to serve data and inference Random Forest model
- [``src/frontend``](https://github.com/kevinjosethomas/wildfires/tree/main/src/frontend): NextJS Frontend to visualize heatmaps with Deck.GL and Mapbox
- [``src/intelligence``](https://github.com/kevinjosethomas/wildfires/tree/main/src/intelligence): Attempts at training Keras Random Forest model 
