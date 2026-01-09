# 📋 GlamCart Project Guidelines

## Project Overview
GlamCart is a modern e-commerce platform for beauty products featuring AI-powered virtual try-on, real-time analytics, and comprehensive admin management system.

---

## 🎯 Core Principles

### 1. **User-Centric Design**
- Every feature must improve user experience
- Accessibility is mandatory (WCAG 2.1 AA compliance)
- Mobile-first responsive design
- Clear error messages and user feedback

### 2. **Security First**
- All passwords hashed with bcrypt (salt rounds: 10)
- JWT tokens with 24-hour expiration
- HTTPS enforced in production
- SQL injection prevention via parameterized queries
- CORS properly configured
- Rate limiting on auth endpoints

### 3. **Performance Standards**
- Page load time: < 3 seconds
- API response time: < 500ms for most endpoints
- Bundle size: < 250KB (gzipped)
- Cache strategy: Browser cache + CDN
- Image optimization: WebP format, lazy loading

### 4. **Code Quality**
- TypeScript strict mode enabled
- ESLint configuration enforced
- 80% test coverage minimum
- No console.log in production code
- DRY principle throughout
- Meaningful commit messages

### 5. **Data Management**
- Relational data in SQL database
- Proper indexing on frequently queried fields
- Backup strategy: Daily automated backups
- Data validation at both client and server
- GDPR compliance for user data

### 6. **Documentation**
- Code comments for complex logic
- README in each major directory
- API documentation with examples
- Deployment instructions
- Troubleshooting guides

---

## 📁 Project Structure Standards

### Backend Structure
```
backend/
├── src/
│   ├── server.ts           # Entry point
│   ├── api/routes/         # API endpoints
│   ├── config/             # Database & environment config
│   ├── middleware/         # Auth, validation, error handling
│   ├── models/             # Data models
│   └── utils/              # Helper functions
├── package.json            # Dependencies
└── tsconfig.json          # TypeScript config
```

### Frontend Structure
```
frontend/
├── src/
│   ├── app/               # Next.js pages
│   ├── components/        # Reusable components
│   ├── context/           # React context
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities & API calls
│   └── globals.css        # Global styles
├── package.json
└── tsconfig.json
```

---

## 🛠️ Development Workflow

### 1. **Feature Development**
```
1. Create feature branch: git checkout -b feature/feature-name
2. Implement feature with tests
3. Create pull request with description
4. Code review by peer
5. Merge to main after approval
6. Deploy to staging for testing
7. Deploy to production after verification
```

### 2. **Bug Fixes**
```
1. Create bug branch: git checkout -b bugfix/bug-name
2. Write test that reproduces bug
3. Fix the bug
4. Verify test passes
5. Create PR with bug details
6. Merge after review
```

### 3. **Commit Message Format**
```
Format: [TYPE] Short description

Types: feat, fix, refactor, docs, test, style, chore
Example: [feat] Add virtual try-on feature
```

---

## 🔐 Security Guidelines

### Authentication & Authorization
- ✅ Use JWT for token-based auth
- ✅ Implement refresh tokens
- ✅ Store tokens in httpOnly cookies
- ✅ Verify user roles before sensitive operations
- ✅ Log failed authentication attempts

### Data Protection
- ✅ Encrypt sensitive data at rest
- ✅ Use HTTPS for all transmissions
- ✅ Sanitize user inputs
- ✅ Prevent XSS attacks with Content Security Policy
- ✅ Prevent CSRF with CSRF tokens

### API Security
- ✅ Implement rate limiting
- ✅ Validate all input parameters
- ✅ Use CORS whitelist
- ✅ Implement request size limits
- ✅ Log suspicious activities

---

## 📊 Performance Guidelines

### Frontend Optimization
- ✅ Code splitting with Next.js dynamic imports
- ✅ Image optimization with next/image
- ✅ CSS-in-JS for critical styles
- ✅ Lazy load non-critical components
- ✅ Minify and compress assets

### Backend Optimization
- ✅ Connection pooling for database
- ✅ Query optimization with indexes
- ✅ Response compression (gzip)
- ✅ Caching strategies (Redis)
- ✅ Load balancing for scalability

### Database Optimization
- ✅ Create indexes on frequently filtered columns
- ✅ Use connection pooling
- ✅ Archive old data
- ✅ Monitor slow queries
- ✅ Regular database maintenance

---

## 🧪 Testing Guidelines

### Unit Testing
- Test individual functions in isolation
- Mock external dependencies
- Aim for 80%+ code coverage
- Test edge cases and error scenarios

### Integration Testing
- Test API endpoints with real database
- Test user workflows end-to-end
- Verify authentication and authorization
- Test data consistency

### E2E Testing
- Automate critical user journeys
- Test on multiple browsers
- Verify responsive design
- Test performance under load

### Test Organization
```
tests/
├── unit/              # Unit tests
├── integration/       # Integration tests
└── e2e/              # End-to-end tests
```

---

## 📝 API Guidelines

### Endpoint Naming
- ✅ Use nouns for resources: `/api/products`
- ✅ Use verbs for actions: `POST /api/products`
- ✅ Use plural for collections: `/api/users`
- ✅ Use IDs in path: `/api/products/{id}`
- ✅ Use query params for filtering: `/api/products?category=lipstick`

### Response Format
```json
{
  "success": true,
  "data": {},
  "error": null,
  "timestamp": "2024-01-08T10:30:00Z"
}
```

### HTTP Status Codes
- 200: OK - Request successful
- 201: Created - Resource created
- 400: Bad Request - Invalid input
- 401: Unauthorized - Authentication required
- 403: Forbidden - Access denied
- 404: Not Found - Resource not found
- 500: Server Error - Internal error

### Rate Limiting
- 100 requests per minute for authenticated users
- 10 requests per minute for unauthenticated users
- Return 429 status code when limit exceeded

---

## 📚 Documentation Standards

### Code Comments
```typescript
// Use for explaining "why" not "what"
// ✅ Good: Multiply by 1000 to convert seconds to milliseconds
// ❌ Bad: const ms = seconds * 1000

/**
 * Calculate total cart price including tax
 * @param items - Array of cart items
 * @param taxRate - Tax rate as decimal (0.08 for 8%)
 * @returns Total price with tax
 */
function calculateTotal(items: CartItem[], taxRate: number): number {
  // Implementation
}
```

### README Template
```markdown
# Feature Name

## Overview
Brief description

## Usage
How to use

## API Reference
Endpoint documentation

## Examples
Code examples

## Contributing
How to contribute

## License
License info
```

---

## 🚀 Deployment Guidelines

### Staging Deployment
1. Merge to develop branch
2. Run full test suite
3. Deploy to staging environment
4. Run smoke tests
5. Get QA approval

### Production Deployment
1. Create release branch
2. Update version numbers
3. Generate changelog
4. Deploy to production
5. Monitor for errors
6. Rollback plan ready

### Environment Variables
```
Development:  .env.local
Staging:      .env.staging
Production:   .env.production
```

Never commit credentials. Use environment variables.

---

## 📈 Monitoring & Logging

### Logging Strategy
- ERROR: Production errors
- WARN: Potential issues
- INFO: Important events
- DEBUG: Development debugging

### Monitoring Tools
- Error tracking: Sentry
- Performance: New Relic
- Analytics: Microsoft Clarity
- Logs: CloudWatch

### Alert Thresholds
- Error rate > 1%: Critical alert
- Response time > 1s: Warning
- CPU usage > 80%: Warning
- Memory usage > 85%: Critical

---

## 🎓 Best Practices

### General
- Keep functions small and focused
- Use meaningful variable names
- Avoid deep nesting
- Write self-documenting code
- Refactor regularly

### React/Frontend
- Use functional components
- Use hooks for state management
- Separate concerns (presentation vs logic)
- Use TypeScript for type safety
- Memoize expensive computations

### Backend/Node
- Use async/await, not callbacks
- Handle errors properly
- Validate all inputs
- Use dependency injection
- Follow REST principles

### Database
- Use transactions for related operations
- Index frequently queried columns
- Avoid N+1 queries
- Use connection pooling
- Regular backups

---

## 📋 Version Control Guidelines

### Branch Naming
- `main` - Production ready
- `develop` - Development branch
- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `hotfix/issue-name` - Production hotfixes

### PR Requirements
- Descriptive title and description
- Tests passing
- Code review approval
- No merge conflicts
- Updated documentation

---

## 🎯 Quality Assurance Checklist

Before releasing:
- ✅ All tests passing
- ✅ Code reviewed
- ✅ Documentation updated
- ✅ Performance tested
- ✅ Security reviewed
- ✅ Mobile responsive
- ✅ Accessibility checked
- ✅ Backward compatible
- ✅ No console errors
- ✅ Deployment steps verified

---

## 📞 Support & Escalation

### Issue Resolution Process
1. Report issue with reproduction steps
2. Assign priority level
3. Assign to appropriate team member
4. Regular status updates
5. Resolution and testing
6. Documentation update

### Priority Levels
- **Critical**: Production down, data loss risk
- **High**: Major feature broken, significant impact
- **Medium**: Minor bug, workaround available
- **Low**: Cosmetic issue, nice to have

---

## 📅 Release Schedule

- **Daily**: Bug fixes and patches
- **Weekly**: Feature releases (Fridays)
- **Monthly**: Major releases (1st of month)
- **Quarterly**: Architecture reviews

---

## 📚 Additional Resources

- [Architecture Documentation](./ARCHITECTURE.md)
- [API Documentation](./API.md)
- [Database Schema](./DATABASE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Troubleshooting](./TROUBLESHOOTING.md)

