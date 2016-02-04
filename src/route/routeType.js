﻿// Store all possible routes in an enum to prevent magic route strings throughout application.
export default {
  // Home is empty on purpose.
  Home: '',
  GettingStarted: 'getting-started',
  Faq: 'frequently-asked-questions',
  About: 'about',
  Donate: 'donate',
  Share: 'share',
  TermsOfUse: 'terms-of-use',
  PrivacyPolicy: 'privacy-policy',
  Contact: 'contact',
  // Match all other routes and assume 404
  NotFound: '*notFound'
};