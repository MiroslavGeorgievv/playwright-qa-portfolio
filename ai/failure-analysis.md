## Example Failed Test

Test name:
Invalid password shows error message

Error:
TimeoutError: Timed out 5000ms waiting for selector "[data-test='error']"

## AI Prompt – Failure Analysis

You are a QA Automation Engineer.

Analyze the following Playwright test failure.

Provide:
- Possible root causes
- Whether this is likely a bug, flaky test, or test issue
- Suggested next investigation steps

### Possible Causes
- The error message element is not rendered immediately
- Locator might be incorrect or changed
- Application response is slow

### Classification
Likely a flaky test or timing issue, not a product bug

### Suggested Actions
- Add explicit wait for error message
- Verify locator in browser DevTools
- Check application response time

## QA Review

- Locator is correct and uses data-test attribute
- Failure likely caused by missing wait or slow response
- Solution: Rely on Playwright auto-wait or assert visibility properly
- Test should not be marked as failed product bug
