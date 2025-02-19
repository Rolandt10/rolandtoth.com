**rolandtoth.com**
---
Some stuff that I dare to share on the internet. [Take a look.](https://rolandtoth.com)

The website is hosted on AWS and utilizes several services, such as:
- DynamoDB
- S3
- Lambda
- EventBridge Scheduler
- API Gateway
- CloudFront
- Simple Queue Service

**Getting "real time" data from Spotify**
---

<img width="829" alt="kép" src="https://github.com/user-attachments/assets/ffc66c40-76db-4d6e-a24c-88c834276530" />

- since EventBridge Scheduler doesn't allow schedules below 1 minute, I use SQS to get the song data every 20s (which turns out to be cheaper than Step Functions)
- DynamoDB helps with decoupling the client from the Spotify API, so there is no 429 (too many requests)

