# **rolandtoth.com**

Some stuff that I dare to share on the internet. [Take a look.](https://rolandtoth.com)

## Documentation

This repository primarily contains the **frontend** of the website. Frontend stack: **Astro**, **React**, **Tailwind CSS**, **TypeScript**, **Vite**, **ESLint**, **MDX**, **RadixUI** (only for Modals).

The **backend** tasks—such as image processing, and comment handling—are managed through **AWS services**, including **Lambda**, **S3**, **DynamoDB**, **API Gateway**, **CloudFront**, and **SQS**.

## Lambda functions

The project - as of yet - uses 11 Lambda functions, structured around the following areas (I know the function names could've been better):

### Currently Read Book

The currently read book feature on my website uses a POST GraphQL request (the Literal Club API uses GraphQL). The access token is regularly refreshed automatically, so no manual authentication is needed.

| Function Name                  | Purpose                                            |
|-------------------------------|----------------------------------------------------|
| `updateLiteralClubAccessToken` | Scheduled function to refresh the Literal Club access token |
| `getCurrentBook`               | Retrieves the current book data through the Literal Club API  |


### Currently Playing Song ("Real-time")

This feature uses polling to retrieve the currently playing song from Spotify — both on the **frontend (every ~7.5s)** and the **backend (every ~15s)**. To avoid exceeding Spotify’s API rate limits from multiple users, the backend handles polling every 15 seconds and stores the result in **DynamoDB**. The client then polls DynamoDB every 7.5 seconds — so in the worst case, users only have to wait half of the backend interval (7.5s) to see the updated song. This provides a more seamless, real-time feel without hitting API limits.

 Function Name                      | Purpose                                                                                       |
|-----------------------------------|-----------------------------------------------------------------------------------------------|
| `refreshSpotifyAccessToken`       | Scheduled function to refresh the Spotify access token                                        |
| `pushMessagesToSQS`               | Pushes polling messages into an SQS queue to simulate ~15s intervals                         |
| `getCurrentlyPlayingSpotifyTrack` | Polls the Spotify API for the currently playing track and updates DynamoDB (triggered via SQS) |
| `getLastPlayedTrack`              | Retrieves the most recent track from DynamoDB (used by the API Gateway)                      |


### Image handling

| Function Name                  | Purpose                                            |
|-------------------------------|----------------------------------------------------|
| `refreshSpotifyAccessToken` | Scheduled function to refresh the Spotify access token |
| `pushMessagesToSQS`               | Since AWS EventBridge allows a minimum interval of 1 minute, this function helps distribute polling tasks to a queue. This enables polling every ~15s, which stays within Spotify’s rate limits.  |
| `getLastPlayedTrack`               | Retrieves the current book data through the Literal Club API  |
| `getCurrentlyPlayingSpotifyTrack`               | Retrieves the current book data through the Literal Club API  |

## Design

The website was designed in Figma, following a [WCAG-compliant](https://www.w3.org/WAI/standards-guidelines/wcag/) color palette for both dark and light themes, along with a consistent typography scale (Inter). I also applied some of my own design sensibilities; whether they’re good or bad, I’ll let you be the judge. You can check the design files [here.](https://www.figma.com/design/uN7ncqyoQQMpBwUdcjaU6n/Blog?node-id=479-622&t=QHzpassO4leYD4Qt-1)

## Accessibility
