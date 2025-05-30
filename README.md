# **rolandtoth.com**

Some stuff that I dare to share on the internet. [Take a look](https://rolandtoth.com).

## Documentation

This repository primarily contains the **frontend** of the website. The frontend stack includes: **Astro**, **React**, **Tailwind CSS**, **TypeScript**, **Vite**, **ESLint**, [**MDX**](https://mdxjs.com/), [**RadixUI**](https://www.radix-ui.com/) (used only for Modals), [**Quill.js**](https://quilljs.com/) (rich text editor).

The **backend** is built using various **AWS services**, including **Lambda**, **S3**, **DynamoDB**, **API Gateway**, **CloudFront**, and **SQS** — handling tasks like image processing, polling, and other automation-heavy workflows.

For **authentication and commenting**, the site uses **Firebase**, which offers a simpler, frontend-friendly solution compared to managing auth flows on AWS.

This section focuses on the backend.

## AWS

### Lambda functions

The project - as of yet - uses 11 Lambda functions, all written in JavaScript, structured around the following areas (I know the function names could've been better):

#### Currently Read Book

The currently read book feature on my website uses a POST GraphQL request (the [Literal Club](https://literal.club/) API uses GraphQL). The access token is regularly refreshed automatically, so no manual authentication is needed.

| Function Name                  | Purpose                                            |
|-------------------------------|----------------------------------------------------|
| `updateLiteralClubAccessToken` | Scheduled function to refresh the Literal Club access token |
| `getCurrentBook`               | Retrieves the current book data through the Literal Club API  |


#### Currently Playing Song ("Real-time")

This feature uses polling to retrieve the currently playing song from Spotify — both on the **frontend (every ~7.5s)** and the **backend (every ~15s)**. To avoid exceeding Spotify’s API rate limits from multiple users, the backend handles polling every 15 seconds and stores the result in **DynamoDB**. The client then polls DynamoDB every 7.5 seconds — so in the worst case, users only have to wait half of the backend interval (7.5s) to see the updated song. This provides a more seamless, real-time feel without hitting API limits.

 Function Name                      | Purpose                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| `refreshSpotifyAccessToken`       | Scheduled function to refresh the Spotify access token                                        |
| `pushMessagesToSQS`               | Pushes polling messages into an SQS queue to simulate ~15s intervals (since the shortest interval AWS EventBridge allows is 1 minute)                        |
| `getCurrentlyPlayingSpotifyTrack` | Polls the Spotify API for the currently playing track and updates DynamoDB (triggered via SQS) |
| `getLastPlayedTrack`              | Retrieves the most recent track from DynamoDB (used by the API Gateway)                      |


#### Image handling

You can check out how I upload and optimize images from my phone to my website in [this blog post](https://www.rolandtoth.com/posts/building-an-image-pipeline/).

| Function Name                  | Purpose                                            |
|-------------------------------|----------------------------------------------------|
| `DropboxToS3Uploader` | Scheduled function to refresh the Spotify access token |
| `DropboxWebhookUpdater`               | Since AWS EventBridge allows a minimum interval of 1 minute, this function helps distribute polling tasks to a queue. This enables polling every ~15s, which stays within Spotify’s rate limits.  |
| `refreshDropboxAccessToken`               | Retrieves the current book data through the Literal Club API  |
| `ListImagesFromS3`               | Retrieves the current book data through the Literal Club API  |
| `getGalleryImages`               | Returns the stored images from S3 (used by the API Gateway) |

## Firebase

### Comment handling

In order to comment, the user needs to be identified using OAuth (Google or GitHub), which is handled through Firebase Authentication. When I was starting out, I wasn’t planning to have a comment section for each blog post — the website was designed to be completely static and is hosted on S3 with no traditional backend. That’s why I use Firebase: it provides an easy way to authenticate users directly from the frontend without setting up a custom backend infrastructure.

## Design

The website was designed in Figma, following a [WCAG-compliant](https://www.w3.org/WAI/standards-guidelines/wcag/) color palette for both dark and light themes, along with a consistent typography scale (Inter). I also applied some of my own design sensibilities; whether they’re good or bad, I’ll let you be the judge. You can check the design files [here](https://www.figma.com/design/uN7ncqyoQQMpBwUdcjaU6n/Blog?node-id=479-622&t=QHzpassO4leYD4Qt-1).

## Accessibility

## Deployment

The site is automatically deployed via GitHub Actions. On every push to the master branch, a workflow builds the project and uploads the static files to an S3 bucket, which is served through CloudFront.

