# KidyTapp

A safe YouTube viewer for kids. No API keys, no installs — runs entirely in the browser.

Hosted on **GitHub Pages**. Channel data stored in **Firebase Firestore**.

---

## Setup (one time)

### 1. Set up Firebase Authentication

1. Go to https://console.firebase.google.com → **kidytapp** project
2. **Build → Authentication → Get started**
3. Enable **Email/Password** sign-in
4. Click **Add user**:
   - Email: `parent@kidytapp.app`
   - Password: whatever you want (this is your parent password)

### 2. Set up Firestore Database

1. **Build → Firestore Database → Create database**
2. Choose **Start in production mode** → pick a region → Done
3. Go to the **Rules** tab and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /channels/{channelId} {
      allow read: true;
      allow write: if request.auth != null;
    }
  }
}
```
4. Click **Publish**

### 3. Enable GitHub Pages

1. Push this folder to a GitHub repository
2. Go to repo **Settings → Pages**
3. Source: **Deploy from a branch** → `main` → `/ (root)`
4. Your app will be live at `https://yourusername.github.io/kidytapp/`

---

## How videos are fetched

KidyTapp uses YouTube's **free RSS feeds** — no API key required.
Each channel's 15 most recent videos are loaded automatically.

---

## File structure

```
index.html              Kids home (channel grid)
channel.html            Channel video list
watch.html              YouTube player
parent/
  index.html            Parent login (password)
  dashboard.html        Add / remove channels
js/
  firebase-config.js    Firebase config
public/
  logo.svg
firestore.rules         Firestore security rules
```
