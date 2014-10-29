

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		getAccounts :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&fields={fields}&q={q}&qLimit={qLimit}&isAnonymous={isAnonymous}&responseFields={responseFields}'
		}),
		getLoginState :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/loginstate?responseFields={responseFields}'
		}),
		getAccount :Client.makeMethod({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}'
		})		,
			addAccount :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/?responseFields={responseFields}'
		}),
		changePassword :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Change-Password'
		}),
		addLoginToExistingCustomer :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Create-Login?responseFields={responseFields}'
		}),
		recomputeCustomerLifetimeValue :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/recomputelifetimevalue'
		}),
		setLoginLocked :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Login-Locked'
		}),
		setPasswordChangeRequired :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Password-Change-Required'
		}),
		addAccountAndLogin :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/Add-Account-And-Login?responseFields={responseFields}'
		}),
		addAccounts :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/Bulk?responseFields={responseFields}'
		}),
		getLoginStateByEmailAddress :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/loginstatebyemailaddress?emailAddress={emailAddress}&responseFields={responseFields}'
		}),
		getLoginStateByUserName :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/loginstatebyusername?userName={userName}&responseFields={responseFields}'
		}),
		resetPassword :Client.makeMethod({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/customer/accounts/Reset-Password'
		})		,
			updateAccount :Client.makeMethod({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}'
		})		,
			deleteAccount :Client.makeMethod({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/customer/accounts/{accountId}'
		})	
	});
};