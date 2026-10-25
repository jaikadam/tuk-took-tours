# Tuk Took Tours - Deployment & Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org))
- npm or yarn package manager
- Git for version control

### Local Development
```bash
# 1. Clone repository (if on GitHub)
git clone <your-repo-url>
cd tuk-took-tours

# 2. Install dependencies
npm install

# 3. Create .env.local file
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Open browser
# Visit http://localhost:3000
```

---

## 🌍 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Automatic deployments from GitHub
- Free tier available
- Built-in CDN and image optimization
- One-click rollbacks

**Steps:**

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add any API keys or secrets needed
   - Redeploy to apply changes

4. **Custom Domain**
   - Settings → Domains
   - Add your domain (e.g., tuktooktours.com)
   - Follow DNS configuration instructions

**Deploy via CLI:**
```bash
npm i -g vercel
vercel login
vercel
```

---

### Option 2: Self-Hosted (Linux/VPS)

**Recommended Hosting:**
- DigitalOcean ($5+/month)
- Linode ($5+/month)
- AWS EC2
- Vultr

**Setup Steps:**

1. **SSH into Server**
```bash
ssh root@your_server_ip
```

2. **Install Node.js**
```bash
# Using NVM (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
node --version
```

3. **Clone Repository**
```bash
cd /var/www
git clone <your-repo-url> tuk-took-tours
cd tuk-took-tours
```

4. **Install Dependencies**
```bash
npm install
npm run build
```

5. **Install PM2 (Process Manager)**
```bash
npm install -g pm2
pm2 start npm --name "tuk-took" -- start
pm2 startup
pm2 save
```

6. **Setup Nginx Reverse Proxy**
```bash
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/default
```

**Nginx Config:**
```nginx
upstream tuk-took {
    server 127.0.0.1:3000;
}

server {
    listen 80;
    server_name tuktooktours.com www.tuktooktours.com;

    location / {
        proxy_pass http://tuk-took;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

7. **Enable SSL (HTTPS)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d tuktooktours.com -d www.tuktooktours.com
```

8. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

---

### Option 3: Docker Deployment

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build & Run:**
```bash
# Build image
docker build -t tuk-took-tours .

# Run container
docker run -p 3000:3000 tuk-took-tours
```

**Deploy on Docker Hub:**
```bash
docker tag tuk-took-tours your_docker_username/tuk-took-tours
docker push your_docker_username/tuk-took-tours
```

---

## 📋 Environment Setup

### .env.local File
```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.tuktooktours.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# Stripe (if implementing payments)
NEXT_PUBLIC_STRIPE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx

# Email Configuration
SENDGRID_API_KEY=SG.xxxxx

# Environment
NODE_ENV=production
```

### Production Checklist
- [ ] Update `NEXT_PUBLIC_API_URL` to production API
- [ ] Configure analytics tracking ID
- [ ] Set up error tracking (Sentry)
- [ ] Configure payment processor (Stripe)
- [ ] Update email service credentials
- [ ] Enable CORS on API endpoints
- [ ] Test all forms work
- [ ] Verify email notifications

---

## 🔧 Maintenance & Updates

### Regular Maintenance
```bash
# Update dependencies
npm outdated
npm update

# Security audit
npm audit
npm audit fix

# Check for vulnerabilities
npm audit --production

# Rebuild and redeploy
npm run build
vercel deploy --prod  # if on Vercel
```

### Monitoring
1. **Error Tracking:** Set up Sentry
2. **Analytics:** Google Analytics 4
3. **Performance:** Vercel Analytics or DataDog
4. **Uptime:** UptimeRobot or StatusPage

### Backup Strategy
- Git commits are your version control
- Daily backup of database (if using one)
- Regular security audits

---

## 🌐 Domain Setup

### DNS Configuration

**For Vercel:**
- Add CNAME record pointing to Vercel nameservers
- Vercel handles SSL automatically

**For Self-Hosted:**
- Add A record pointing to your server IP
- Use Certbot for automatic SSL renewal

### Email Configuration
```
MX Records for email delivery
If using custom email service (SendGrid, Mailgun)
```

---

## 📊 Post-Launch Checklist

### Day 1
- [ ] Monitor error logs
- [ ] Check analytics dashboard
- [ ] Verify all pages loading
- [ ] Test contact forms
- [ ] Check email delivery

### Week 1
- [ ] Review performance metrics
- [ ] Fix any reported bugs
- [ ] Optimize images if needed
- [ ] Set up backup schedule

### Month 1
- [ ] Run security audit
- [ ] Update dependencies
- [ ] Analyze user behavior
- [ ] Plan future features

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Page Not Loading
```bash
# Check server logs
pm2 logs tuk-took

# Restart application
pm2 restart tuk-took
```

### High Memory Usage
```bash
# Check process memory
pm2 monit

# Increase Node memory
node --max-old-space-size=4096 node_modules/.bin/next start
```

### Database Connection Issues
- Verify connection string in .env
- Check database firewall rules
- Ensure credentials are correct

---

## 📈 Performance Optimization

### Enable Caching
```bash
# Set cache headers in Nginx
add_header Cache-Control "public, max-age=3600";
```

### Enable Compression
```bash
# In next.config.js
module.exports = {
  compress: true,
}
```

### Database Optimization
- Use indexes on frequently queried fields
- Enable query caching
- Archive old data regularly

---

## 🔐 Security Hardening

### Essential Steps
1. **Enable HTTPS** (automatic with Certbot)
2. **Set Security Headers**
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()";
```

3. **Enable CORS Properly**
```javascript
// In Next.js API routes
res.setHeader('Access-Control-Allow-Credentials', 'true')
res.setHeader('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_API_URL)
```

4. **Rate Limiting**
   - Implement on API endpoints
   - Prevent DDoS attacks

5. **Regular Updates**
   - Keep Node.js updated
   - Update npm packages monthly
   - Monitor security advisories

---

## 📞 Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

### Hosting Support
- Vercel: [vercel.com/support](https://vercel.com/support)
- DigitalOcean: [docs.digitalocean.com](https://docs.digitalocean.com)

### Community
- [Next.js Discord](https://discord.gg/bUG7V3H)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Deployment Guide Last Updated:** October 2026
**Status:** ✅ Production Ready
