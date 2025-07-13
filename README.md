# `rolandtoth.com`

My personal website — a place for writing, experimenting, and building.  
[Visit site](https://www.rolandtoth.com)

## Tech Stack

### Frontend

- [**Astro**](https://astro.build/) for static site generation  
- **React**, **TypeScript**, **Tailwind CSS**, **Vite**  
- [**MDX**](https://mdxjs.com/) for content authoring  
- [**Radix UI**](https://www.radix-ui.com/) – modals, tooltips  
- [**Framer Motion**](https://motion.dev/) – animations  
- [**CMDK**](https://cmdk.paco.me/) – command menu  
- [**Quill.js**](https://quilljs.com/) – rich text editor  

### Backend

- **AWS Lambda**, **API Gateway** (REST + WebSocket), **DynamoDB**, **S3**, **SQS**, **EventBridge**, **CloudFront**, **Secrets Manager**  
- **Firebase Authentication** and **Firestore** for comment handling

## Features

### Real-time Spotify integration

Polls the Spotify API for the currently playing track and broadcasts updates via WebSockets to all connected clients.  
Built with AWS Lambda, SQS, DynamoDB Streams, WebSocket API.  
[Read blog post](https://www.rolandtoth.com/posts/real-time-spotify-tracker)

**Lambda functions:**

- `refreshSpotifyAccessToken`  
- `pushMessagesToSQS`  
- `getCurrentlyPlayingSpotifyTrack`  
- `SpotifySongUpdateBroadcast`

### Image pipeline (Dropbox → S3)

Uploads photos from my phone via Dropbox → processes → resizes (AVIF/WebP) → serves from S3.  
Also includes alt-text generation with AWS Bedrock.

**Lambda functions:**

- `DropboxWebhookUpdater`  
- `DropboxToS3Uploader`  
- `refreshDropboxAccessToken`  
- `ListImagesFromS3`  
- `getGalleryImages`

### Currently reading (Literal Club API)

Uses a background process to fetch the current book I'm reading via GraphQL and display it on the site.

**Lambda functions:**

- `updateLiteralClubAccessToken`  
- `getCurrentBook`

### Commenting

- OAuth (Google, GitHub) via Firebase Authentication  
- Comments stored in Firestore  
- Fully client-side integration, no custom backend needed

## Design

Designed in Figma with:

- WCAG-compliant color system (dark & light mode)  
- Consistent typography using [Inter](https://rsms.me/inter/)  
- Microinteractions and motion via Framer Motion  

[View design file](https://www.figma.com/design/uN7ncqyoQQMpBwUdcjaU6n/Blog?node-id=479-622&t=QHzpassO4leYD4Qt-1)

## Deployment

- CI/CD via GitHub Actions  
- Build output uploaded to S3  
- Delivered via CloudFront
