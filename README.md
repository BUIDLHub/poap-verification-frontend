# POAP Private Chat Access Verification

_A **BUIDLHub** custom project._

## What is POAP?

Proof of Attendance Protocol (POAP) is a project that offers conference/event attendees physical badges at registration. These badges have QRCodes that when scanned, allow the holder to "claim" the badge on-chain. A Non-Fungible-Token (NFT) is transferred to the badge holder during this process so that anyone can verify that they attended the event. 

## What else can badges do?

Since NFT ownership can be verified on-chain, it's possible to tie the NFT to pretty much anything you want. In the case of this project, the NFT is being used to grant access to private chat channels in Discord (other platforms are also possible in the future).

## How it works

- A badge holder claims a badge through the POAP claims process
- With that badge, the holder visits a hosted version of this project (which could be run locally...see Building section)
- The badge holder is presented with a list of all their claimed POAP badges
- Selecting a badge, they are asked to verify ownership by signing a string of characters with their in-browser wallet
- The event, badge, and signature information is sent to a backend service that verifies badge ownership on-chain.
- The backend service verifies ownership and returns the Discord server invite links and "authorization commands"
- In order to gain access to Discord channels, a bot must be installed on the Discord server that knows how to interpret and verify these authorization command codes and then assign the appropriate roles to the requesting user
- The backend service and bot components could be built to support this functionality, but by default BUILDHub is used to support both of these services

- BUIDLHub maintains the logic to verify POAP badges along with conference/event details such as which Discord servers and roles to assign to badge owners for specific conferences/events.
- BUIDLHUb also provides the backend for Discord bots that respond to channel request authorization codes and assigns roles for channel access.

## Building
This is a React project and the team uses yarn to run locally and build the project. If you want to run this service locally, in the project root directory, simply run:

```
> yarn
> yarn start
``` 

This will start a local dev server and present the UI on port 3000.

If you want to deploy using a service like Heroku, follow instructions at https://blog.heroku.com/deploying-react-with-zero-configuration



