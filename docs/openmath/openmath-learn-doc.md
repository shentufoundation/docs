---
sidebar_position: 1
title: OpenMath Learn Doc
---

## OpenMath Learn Doc

### 1. Introduction

OpenMath is a decentralized platform where users can collaboratively prove mathematical theorems using the Coq proof assistant. By leveraging Web3 wallet authentication, users earn crypto rewards for contributing proofs.

### 2. Getting Started

#### 2.1 Wallet Connection

<div align="center">
  <img src="https://img.shentu.org/om/connect-wallet.gif" width="720"/>
</div>

Steps:
- Click "Connect Wallet" on the portal page
- Select your Web3 wallet
- Sign the authentication request
- Dashboard loads automatically after successful login

#### 2.2 Profile Setup 

<div align="center">
  <img src="https://img.shentu.org/om/profile-edit.gif" width="720"/>
</div>

Click "Profile" at the wallet address dropdown to view your personal statistics and edit your avatar or nickname.

> Tips:
    Your nickname will be related to your fame points and future airdrops, so choose a good one.

### 3. Theorem Exploration

#### 3.1 Open Theorems

<div align="center">
  <img src="https://img.shentu.org/om/open-theorem.gif" width="720"/>
</div>

Click "Open Theorems" to view theorems that have not been proven yet. You can work on them to earn rewards.

> Tips:
    Pay attention to the expiration date of the theorem.

#### 3.2 Proven Theorems

Click "Proven Theorems" to view theorems with proofs. In the future, you can refer to them in your own proofs.

### 4. Proof Operations 

#### 4.1 Proof Submission

<div align="center">
  <img src="https://img.shentu.org/om/submit-proof.gif" width="720"/>
</div>

Steps:

- Navigate to the "Open Theorems" tab and click on one theorem for details
- Click "Submit Proof"
- Edit your proof on the JsCoq panel (recommended) or your own IDE
- Click "Submit Hash" to submit the proof hash and occupy the slot

- Click "Submit" within 15 minutes to complete the proof submission
- Wait for proof verification

Complete the submission to automatically receive rewards.

> Why do we need a two-step submission process?
>
> Since OpenMath is running in a decentralized environment, all submissions will be broadcasted through your Web3 wallet, which may be connected to a specific node. This means the node holder can see your exact proof contents before they are actually recorded on-chain. So your assets may be at risk of man-in-the-middle attacks. 
>
> The two-step submission process will completely overcome this situation. The proof hash submission contains no information about your proof code. You can start the real submission after confirming the proof hash is already on-chain. So no one can steal the rewards that belong to you.

Format requirements for proof submissions:

- You cannot modify the theorem code that is already on-chain, but you can add statements before/between/after the theorem statements.
- The last line of the theorem code will always be the "Theorem" statement. Write your proof after it, and make sure the last statement of your proof code should be "Qed."
- Our Coq environment only contains the native libraries, so you may need to write some "Lemma"s before the final "Theorem".

#### 4.2 Proof Verification

The proof will be checked automatically after being submitted. You can wait a while to see the results.

If you have any questions about the verification results, please contact us directly.

### 5. Rewards System 

#### 5.1 Claiming Rewards

<div align="center">
  <img src="https://img.shentu.org/om/claim-reward.gif" width="720"/>
</div>

Steps:

- Click "Profile" to visit the user profile page
- Click the "Claim" button to build the transaction
- Sign the transaction through your Web3 wallet and broadcast it
- Check your CTK balance on your Web3 wallet

### 6. Advanced Features

#### 6.1 Create New Theorem

<div align="center">
  <img src="https://img.shentu.org/om/create-theorem.gif" width="720"/>
</div>

Requirements:

- Minimum 1 CTK deposit
- Clear problem description
- Formal Coq statement syntax

> Tips:
    You can input MathJax-formatted mathematical formulas in the input box by enclosing the MathJax code between the `$$` symbols. Click the preview button to view the rendered mathematical formula in real-time.

#### 6.2 Funding Theorems

Steps:

- Choose an open theorem
- Click "Add Funding"
- Input the correct amount
- Broadcast the transaction

### 7. Support

If you have any questions, don't hesitate to contact us at:

mailto:support@shentu.org

Reference resources:

- https://coq.inria.fr/documentation

 