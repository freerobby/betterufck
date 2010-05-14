// ==UserScript==
// @name           BetterUfck
// @namespace      http://freerobby.com
// @description    Added features for ufck.org
// @include        http://ufck.org/*
// ==/UserScript==

////////////////////////////////////////////////////////////////////
// Configuration - set values to true to enable; false to disable //
////////////////////////////////////////////////////////////////////

// Remove page title
var opt_pretendToBeGoogle = true;

// Append all thread titles with one-click "ignore thread" option
var opt_addIgnoreThreadLink = true;
var opt_addIgnoreThreadLinkText = '[i]';

// Append all thread titles with one-click "subscribe to thread" option
var opt_addSubscribeToThreadLink = true;
var opt_addSubscribeToThreadLinkText = '[s]';

// Add "Ignore this user" to user drop-down menu options
var opt_addIgnoreUserToUserMenu = true;

// Unbold thread titles
var opt_unboldThreadTitles = true;

// Gray out titles of read threads
var opt_grayReadThreads = false;

// Remove ignored user post message (you'll see nothing when an ignored user posts)
var opt_removeUserIsIgnoredMessage = true;

// Reduce size of super-big images so they look nice
var opt_reduceBigImages = true;

// Show full links instead of vB abbreviated ones
var opt_showFullLinks = true;

// Convert YouTube videso into links
var opt_spoilerEmbeddedObjects = true;

// Provide unignoring of threads
var opt_unignoreThreadOption = true;

////////////////////////////////////////////
// EDIT BELOW THIS LINE AT YOUR OWN RISK! //
////////////////////////////////////////////

//
if (opt_pretendToBeGoogle) {
	document.title = 'Google';
	var gfv = document.createElement('link');
	gfv.setAttribute('type', 'image/x-icon');
	gfv.setAttribute('rel', 'shortcut icon');
	gfv.setAttribute('href', 'data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8A//3/AP39/wD6/f8A+P3/AP/8/wD9/P8A+vz/AP/7/wD/+v8A/vr/APz6/wD4+v8A+/n/APP5/wD/+P8A+vj/AO/4/wDm+P8A2fj/AP/3/wD/9v8A9vb/AP/1/wD69f8A9PT/AO30/wD/8/8A//L/APnx/wD28P8A///+APj//gD2//4A9P/+AOP//gD//f4A6f/9AP///AD2//wA8//8APf9/AD///sA/v/7AOD/+wD/+vsA9/X7APr/+gDv/voA///5AP/9+QD/+/kA+e35AP//+ADm//gA4f/4AP/9+AD0+/gA///3APv/9wDz//cA8f/3AO3/9wD/8fcA//32AP369gDr+vYA8f/1AOv/9QD/+/UA///0APP/9ADq//QA///zAP/18wD///IA/fzyAP//8QD///AA9//wAPjw8AD//+8A8//vAP//7gD9/+4A9v/uAP/u7gD//+0A9v/tAP7/6wD/+eoA///pAP//6AD2/+gA//nnAP/45wD38eYA/fblAP/25AD29uQA7N/hAPzm4AD/690AEhjdAAAa3AAaJdsA//LXAC8g1gANH9YA+dnTAP/n0gDh5dIADyjSABkk0gAdH9EABxDRAP/l0AAAJs4AGRTOAPPczQAAKs0AIi7MAA4UywD56soA8tPKANTSygD/18kA6NLHAAAjxwDj28QA/s7CAP/1wQDw3r8A/9e8APrSrwDCtqoAzamjANmPiQDQj4YA35mBAOmefgDHj3wA1qR6AO+sbwDpmm8A2IVlAKmEYgCvaFoAvHNXAEq2VgA5s1UAPbhQAFWtTwBStU0ARbNNAEGxTQA7tEwAObZIAEq5RwDKdEYAULhDANtuQgBEtTwA1ls3ALhgMQCxNzEA2FsvAEC3LQB0MCkAiyYoANZTJwDLWyYAtjMlALE6JACZNSMAuW4iANlgIgDoWCEAylwgAMUuIAD3Vh8A52gdALRCHQCxWhwAsEkcALU4HACMOBwA0V4bAMYyGgCPJRoA218ZAJM7FwC/PxYA0msVAM9jFQD2XBUAqioVAIAfFQDhYRQAujMTAMUxEwCgLBMAnxIPAMsqDgCkFgsA6GMHALE2BAC9JQAAliIAAFYTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AsbGxsbGxsbGxsbGxsbGxd7IrMg8PDw8PDw8PUBQeJXjQYE9PcKPM2NfP2sWhcg+BzTE7dLjbmG03YWaV4JYye8MPbsLZlEouKRRCg9SXMoW/U53enGRAFzCRtNO7mTiAyliw30gRTg9VbJCKfYs0j9VmuscfLTFbIy8SOhA0Inq5Y77GNBMYIxQUJzM2Vxx2wEmfyCYWMRldXCg5MU0aicRUms58SUVeRkwjPBRSNIfBMkSgvWkyPxVHFIaMSx1/0S9nkq7WdWo1a43Jt2UqgtJERGJ5m6K8y92znpNWIYS1UQ89Mmg5cXNaX0EkGyyI3KSsp6mvpaqosaatq7axsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=');
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(gfv);
}

////////////////////////////////
// Unignore threads from list //
////////////////////////////////
if (isCurrentPage("showthread.php") && opt_unignoreThreadOption) {
  // http://ufck.org/forums/cis_ignore_thread.php?do=u&t=218236
  // Create an invisible i-frame to send html requests when threads are ignored.
	var iframe = document.createElement("iframe");
	iframe.width = 1;
	iframe.id = "ignore_iframe";
	iframe.height = 1;
	iframe.style.visibility = "hidden";
	document.body.appendChild(iframe);
	
  var allLinks, thisLink;
	allLinks = document.evaluate("//a", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allLinks.snapshotLength; i++) {
		thisLink = allLinks.snapshotItem(i);
		// Check that it's a thread link.
		if ((thisLink.href.indexOf('http://ufck.org/forums/showthread.php?t=')==0) &&
		    (thisLink.parentNode.parentNode.parentNode.parentNode.parentNode.className.indexOf('postbody') == 0)) {
  		var postNode = document.createTextNode(' ');
  		var threadID = thisLink.href.match(/\d+/);
  		if (opt_addIgnoreThreadLink) {
  			var newElement = document.createElement("a");
  			newElement.setAttribute('href', '/forums/cis_ignore_thread.php?do=u&t=' + threadID);
  			newElement.setAttribute('title', 'Unignore this thread if it is ignored');
  			newElement.setAttribute('target', '_blank');
  			newElement.innerHTML = '[unignore]';
  			newElement.style.color='#999999';
  			newElement.style.textDecoration='none';
  			thisLink.parentNode.appendChild(newElement, thisLink);
  			thisLink.parentNode.appendChild(postNode, thisLink);
			}
		}
	}
}


//////////////////////////////
// Spoiler Embedded Objects //
//////////////////////////////
if (isCurrentPage("showthread.php") && opt_spoilerEmbeddedObjects) {
	var allDivs, thisDiv;
	allDivs = document.evaluate("//div[@id]", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allDivs.snapshotLength; i++) {
		thisDiv = allDivs.snapshotItem(i);
		// If this is a post, ...
		if (thisDiv.id.indexOf('post_message_')==0) {
			var spoilerStart = "<div style=\"margin:5px 20px 20px 20px\"><div class=\"smallfont\" style=\"margin-bottom:2px\"><b>Embedded Object Spoiler:</b> <input type=\"button\" value=\"Show\" style=\"width:45px;font-size:10px;margin:0px;padding:0px;\" onclick=\"if (this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display != '') { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = '';this.innerText = ''; this.value = 'Hide'; } else { this.parentNode.parentNode.getElementsByTagName('div')[1].getElementsByTagName('div')[0].style.display = 'none'; this.innerText = ''; this.value = 'Show'; }\"></div><div class=\"alt2\" style=\"margin: 0px; padding: 6px; border: 1px inset;\"><div style=\"display: none;\">";
			var spoilerStop = "</div></div></div>";
			// Get post content (HTML).
			var postHTML = thisDiv.innerHTML;
			// Remove embedded YouTube from post content.
			var prefix = '<object';
			var suffix = '</object>';
			var lastFoundPos = 0;
			var ytStartPos = postHTML.indexOf(prefix, lastFoundPos);
			while (ytStartPos >= 0) {
				var ytEndPos = postHTML.indexOf(suffix, lastFoundPos) + suffix.length;
				var newHTML =
					postHTML.substring(0, ytStartPos) +
					spoilerStart +
					postHTML.substring(ytStartPos, ytEndPos) +
					spoilerStop +
					postHTML.substring(ytEndPos, postHTML.length);
				
				lastFoundPos =
					postHTML.substring(0, ytStartPos).length +
					spoilerStart.length +
					postHTML.substring(ytStartPos, ytEndPos).length +
					spoilerStop.length;
				thisDiv.innerHTML = newHTML;
				postHTML = thisDiv.innerHTML;
				ytStartPos = postHTML.indexOf(prefix, lastFoundPos);
			}
		}
	}
}

////////////////////////////////////////////////////
// Show full links instead of vB abbreviated ones //
////////////////////////////////////////////////////
if (isCurrentPage("showthread.php") && opt_showFullLinks) {
	urlarray = document.evaluate('//a[@href]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	matchtext = new RegExp("/\.{3,3}[0-z]");
	var rrdirect = 0;  //if = 1, then try to remove prefixes like "http://anonym.to/?" etc.
	for(var i = 0; i < urlarray.snapshotLength; i++) {
		link = urlarray.snapshotItem(i);
		if (link.firstChild) {
			var d = link.firstChild.nodeValue;
			var u = link.href;
			match = matchtext.exec(d);
			if (match) {
				var linkparts = d.split("...");
				var a = u.indexOf(linkparts[0].replace(/ +/g, ' ').replace(/^\s+/g, '').replace(/\s+$/g, ''));
				var z = 0;
				if (linkparts[1]){
					z = u.indexOf(linkparts[1].replace(/ +/g, ' ').replace(/^\s+/g, '').replace(/\s+$/g, ''));
				}
				if (a != -1 && z != -1) {
					if (rrdirect == 1) {
						link.firstChild.nodeValue = u.slice(a);
					}
					else {
						link.firstChild.nodeValue = u;
					}
				}
			}
		}
	}
}


///////////////////////////////////////
// Reduce size of super large images //
///////////////////////////////////////
if (isCurrentPage("showthread.php") && opt_reduceBigImages) {
	maxWidth = window.innerWidth * 0.7; // 70% of browser width
	var aImg = document.getElementsByTagName('img');
	for (j=0; j<aImg.length; j++) {
		aImg[j].style.maxWidth = maxWidth + 'px';
		if (! aImg[j].title)
			aImg[j].title = 'Click image to restore full dimensions.';
		aImg[j].addEventListener('click', function(event) {
				if (event.currentTarget.style.maxWidth == 'none')
					event.currentTarget.style.maxWidth = maxWidth + 'px';
				else
					event.currentTarget.style.maxWidth = 'none';
			}, false);
	}
}

////////////////////////////////////
// Remove user-is-ignored message //
////////////////////////////////////
if (isCurrentPage("showthread.php") && opt_removeUserIsIgnoredMessage) {
	var filterkey = "profile.php?userlist=ignore&amp;do=removelist&amp;u=";
	var allElements, thisElement;
	allElements = document.getElementsByTagName('blockquote');
	for (var i = 0; i < allElements.length; i++) {
		thisElement = allElements[i];
    if(thisElement.innerHTML.indexOf(filterkey) != -1) {
      thisElement.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
		}
	}
}

////////////////////////////////////////////////
// Unbold thread titles and gray read threads //
////////////////////////////////////////////////
if ((isCurrentPage('forumdisplay.php') || isCurrentPage('search.php')) && (opt_unboldThreadTitles || opt_grayReadThreads)) {
	var allLinks, thisLink;
	allLinks = document.evaluate("//a", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allLinks.snapshotLength; i++) {
		thisLink = allLinks.snapshotItem(i);
		// Check that it's a thread link.
		if ((thisLink.id.indexOf('thread_title_')==0)) {
		  thisLink.style.fontWeight="normal";
			if (opt_grayReadThreads && thisLink.className.indexOf('threadtitle_unread')<0) {
				thisLink.style.color="#666666";
			}
		}
	}
}

/////////////////////////////////////////////////
// Check to see if we're at a particular page. //
/////////////////////////////////////////////////
function isCurrentPage(pageName)
{
	var curLocation = location.href;
	if (curLocation.indexOf(pageName) > 0)
		return true;
	else
		return false;
}

////////////////////////////////////////////////////////////////////////////
// Add ignore thread and subscribe to thread features to main forum pages //
////////////////////////////////////////////////////////////////////////////
if ((isCurrentPage('forumdisplay.php') || isCurrentPage('search.php')) && (opt_addIgnoreThreadLink || opt_addSubscribeToThreadLink))
{
	// Create an invisible i-frame to send html requests when threads are ignored.
	var iframe = document.createElement("iframe");
	iframe.width = 1;
	iframe.id = "ignore_iframe";
	iframe.height = 1;
	iframe.style.visibility = "hidden";
	document.body.appendChild(iframe);
				
	var allLinks, thisLink;
	allLinks = document.evaluate('//a[@href]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allLinks.snapshotLength; i++) {
		thisLink = allLinks.snapshotItem(i);
	  if (thisLink.id.indexOf('thread_title_')>=0) {
			var postNode = document.createTextNode(' ');
			var threadID = thisLink.href.match(/\d+/);
			if (opt_addIgnoreThreadLink) {
				var newElement = document.createElement("a");
				var undoElement = document.createElement("a");
				var theJS =
					'javascript:' +
					'document.getElementById("ignore_iframe").src = "/forums/cis_ignore_thread.php?do=ignorethread&t=' +
					threadID +
					'";' +
					//'javascript:this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);';
					'javascript:this.parentNode.parentNode.innerHTML=\'Thread Ignored. <a href="/forums/cis_ignore_thread.php?do=u&t='
					+ threadID
					+ '" target="_self">Undo</a>\'';
				newElement.setAttribute('onclick', theJS);
				newElement.setAttribute('title', 'Ignore this thread');
			  newElement.setAttribute('style', 'cursor:pointer;');
				newElement.innerHTML = opt_addIgnoreThreadLinkText;
				newElement.style.color='#999999';
				newElement.style.textDecoration='none';
				thisLink.parentNode.appendChild(newElement, thisLink);
				thisLink.parentNode.appendChild(postNode, thisLink);
			}

		  if (opt_addSubscribeToThreadLink) {
				var subscribeElement = document.createElement("a");
				subscribeElement.setAttribute("href", "/forums/subscription.php?do=addsubscription&t=" + threadID);
				subscribeElement.setAttribute('title', 'Subscribe to this thread');
				subscribeElement.innerHTML = opt_addSubscribeToThreadLinkText;
				subscribeElement.style.color='#999999';
				subscribeElement.style.textDecoration='none';
				thisLink.parentNode.appendChild(subscribeElement, thisLink);
				thisLink.parentNode.appendChild(postNode, thisLink);
			}
		}
	}
}

/////////////////////////////////////////////////////////
// Add ignore user feature to user-click dropdown list //
/////////////////////////////////////////////////////////
if (isCurrentPage('showthread.php') && opt_addIgnoreUserToUserMenu)
{
	var allMemberSections, thisMemberSection;
	allMemberSections = document.evaluate('//a[@href]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allMemberSections.snapshotLength; i++) {
		thisMemberSection = allMemberSections.snapshotItem(i);
		// If we find a link to a member profile, ...
		if (thisMemberSection.href.indexOf('profile.php?do=addlist') > 0) {
      var userID = thisMemberSection.href.match(/\d+/);
			// Construct the table row.
			var node1 = document.createElement('li');
			node1.setAttribute('class', 'left');
			var node2 = document.createElement('a');
			node2.setAttribute('href', 'profile.php?do=addlist&userlist=ignore&u=' + userID);
			node2.innerHTML = '<img src="images/site_icons/add.png"></img> Add to ignore list';
			node1.appendChild(node2);
			
			// Add the list item.
			thisMemberSection.parentNode.parentNode.appendChild(node1, thisMemberSection);
		}
	}
}
