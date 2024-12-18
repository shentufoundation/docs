---
sidebar_position: 2
sidebar_label: Finding Severity
tags: [Finding, Severity]
---

## Finding Severity Classification
At OpenBounty, all findings are classified in 5 severity levels:

- **Critical**
  - The client's and or the user of the smart contract's funding suffers a loss, no matter if it can be recovered or not afterward.
  - The vulnerability that may cause the control issue that impacts the business flow of the project.
  - The potential fraud that is caused by the owner of the sensitive role/address in the project.
  - The client's information may be leaked due to the vulnerability. For example, private key leakage in the repository
  - Finding that needs to be addressed immediately.
- **High**
  - The inconsistency between design and implementation will cause the loss of funding or create the vulnerability.
  - The unpredicted result of external function invocation.
  - Finding that needs to be addressed ASAP.
- **Medium**
  - The vulnerability that does not cause assets lose or lose control of the project.
  - Not validated payload from the user input.
- **Low**
  - Project Information/Data could be reused on different blockchain.
  - Finding that needs to be addressed when the client's time permits.
- **Informational**
  - Any security concerns that are out of the audit scope.
Finding that can optionally be addressed depending on the client's decision.
  - Finding that related to inconsistent with the implementation in the official library.
  - Finding that could cause ambiguous and not easy to understand without any specific comments/annotation.
  - Optimization improvement that can reduce the deployment or transaction fee.
  - Unnecessary require() check that could be removed to reduce the gas cost
  - Incorrect variable used that will not cause any negative effect e.g. does not cause asset lose.
  - Finding that needs to be confirmed with the client. This will be updated into one of the above levels in the final report
