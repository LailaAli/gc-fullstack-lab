import $ from "jquery-ajax";

export function fetchContacts() {
    return function(dispatch) {
        dispatch(requestContacts());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("/api/contacts").done(function(data) {
            dispatch(receiveContacts(data));
        });
    };
}

function requestContacts() {
    return {
        type: "REQUEST_CONTACTS"
    };
}

function receiveContacts(contacts) {
    return {
        type: "RECEIVE_CONTACTS",
        contacts
    };
}

export function addContact(contact) {
    return function(dispatch) {
        // Use the POST method and include the contact JSON as the request body.
        $.ajax({
            url: "/api/contacts/",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(contact)
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchContacts());
        });
    };
}

export function removeContact(id) {
    return function(dispatch) {
        // Use the DELETE method.
        $.ajax({
            // When building URLs, encodeURIComponent helps keep the URL safe.
            url: "/api/contacts/" + encodeURIComponent(id),
            method: "DELETE"
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchContacts());
        });
    };
}

export function updateContact(id, contact) {
    return function(dispatch) {
        // Use the PUT method and include the contact JSON as the request body.
        $.ajax({
            // When building URLs, encodeURIComponent helps keep the URL safe.
            url: "/api/contacts/" + encodeURIComponent(id),
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(contact)
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchContacts());
        });
    };
}
