# SEAMASTER MARINE SERVICES LLC — Developer Handoff v2

Premium responsive corporate/offshore marine website concept for Abu Dhabi.

## Brand
- Company: Seamaster Marine Services LLC
- Domain: https://www.seamastermarine.net
- Email: info@seamastermarine.net
- Phone: +971 50 357 9482
- Location: Abu Dhabi, UAE

## Core divisions
1. Ship Management & Operations
2. Marine Surveys — OVID, CMID, MWS, Pre-Purchase, Suitability, DP Trials, Annual Services
3. Marine Consultancy
4. Chartering & Brokering of Vessels
5. Marine Manpower Supplies — Marine Specialist, MWS, RMM, Marine Rep, Marine Adviser, Client Rep, OIM, OCM, Port Captain, Port Engineer
6. Engineering — LPA and related marine engineering support

## Pages
- index.html — home
- services.html — all services
- about.html — company / capabilities
- contact.html — enquiry centre

## Dynamic modules to connect in production
- CMS for services, projects, news and vessel listings
- Service enquiry API/email routing
- CV upload with file validation and secure storage
- Manpower request workflow
- Vessel chartering request / vessel availability board
- Survey booking request
- WhatsApp integration
- Arabic RTL version
- Google Analytics / Search Console
- reCAPTCHA or Cloudflare Turnstile
- SMTP / transactional email

## Form behaviour
The front-end forms currently prepare a mailto request so developers can test immediately. Replace this with a secure backend endpoint in production. Never expose SMTP credentials in client-side JavaScript.

## Recommended production stack
Next.js or Laravel + PostgreSQL, with a small CMS/admin panel. Cloudflare CDN/WAF is recommended.

## Design direction
Deep navy, marine cyan, white and steel-grey. Editorial typography, large offshore imagery, subtle motion, clear conversion points. The visual language is premium offshore contractor rather than generic shipping-company template.

## Before launch
Replace placeholder imagery with licensed company/project/vessel photographs; add legal registration details, office address, company logo, UAE licence details, privacy policy and terms after verification.
