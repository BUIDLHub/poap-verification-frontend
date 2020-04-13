# POAP Verification Frontend

_A **BUIDLHub** custom project._

- A user goes to chat.poap.xyz, which connects to MetaMask to get wallet address
- The frontend queries poap.xyz for user’s claimed badges against that wallet address.
- User clicks a badge to gain access to the badge’s associated private chat channel.
- This initiates a MetaMask request to sign a token.
- The wallet signature, badge’s eventID, and badge tokenID are sent to BUIDLHub for verification.
