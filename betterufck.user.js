// ==UserScript==
// @name           BetterUfck
// @namespace      http://www.freerobby.com
// @description    Added features for ufck.org
// @include        http://ufck.org/*
// ==/UserScript==

// Modified 2009-09-09

////////////////////////////////////////////////////////////////////
// Configuration - set values to true to enable; false to disable //
////////////////////////////////////////////////////////////////////

// Remove page title
var opt_pretendToBeGoogle = true;

// Remove "check out what subforums we have" message at top
var opt_removeCheckOutSubforumsMessage = true;

// Append all thread titles with one-click "ignore thread" option
var opt_addIgnoreThreadLink = true;
var opt_addIgnoreThreadLinkText = '[i]';

// Append all thread titles with one-click "subscribe to thread" option
var opt_addSubscribeToThreadLink = true;
var opt_addSubscribeToThreadLinkText = '[s]';

// Add "Ignore this user" to user drop-down menu options
var opt_addIgnoreUserToUserMenu = true;

// Enable auto-loading of next forum page when you reach bottom of page (experimental)
var opt_autoScrolling = true;

// Remove ufck.org logo from top of page.
var opt_removeLogo = true;

// Unbold thread titles
var opt_unboldThreadTitles = true;

// Gray out titles of read threads
var opt_grayReadThreads = true;

// Automatically quote referenced post on quick reply
var opt_autoQuoteQuickReply = true;

// Remove ignored user post message (you'll see nothing when an ignored user posts)
var opt_removeUserIsIgnoredMessage = true;

// Reduce size of super-big images so they look nice
var opt_reduceBigImages = true;

// Show full links instead of vB abbreviated ones
var opt_showFullLinks = true;

// Convert YouTube videso into links
var opt_spoilerEmbeddedObjects = true;

// Compact subforums box
var opt_compactSubforumsBox = false;

////////////////////////////////////////////
// EDIT BELOW THIS LINE AT YOUR OWN RISK! //
////////////////////////////////////////////

if (opt_compactSubforumsBox)
	opt_removeCheckOutSubforumsMessage = true;

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
	maxWidth = window.innerWidth * 0.75; // 75% of browser width
	var aSpan = document.getElementsByTagName('td');
	for (i=0; i<aSpan.length; i++) {
		if (aSpan[i].className == 'alt1') {
			var aImg = aSpan[i].getElementsByTagName('img');
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
	}
}

////////////////////////////////////
// Remove user-is-ignored message //
////////////////////////////////////
if (isCurrentPage("showthread.php") && opt_removeUserIsIgnoredMessage) {
	var filterkey = "profile.php?userlist=ignore&amp;do=removelist&amp;u=";
	var allElements, thisElement;
	allElements = document.getElementsByTagName('tr');
	for (var i = 0; i < allElements.length; i++) {
		thisElement = allElements[i];
		if(thisElement.innerHTML.indexOf(filterkey) != -1) {
			thisElement.parentNode.style.display = 'none';
		}
	}
}

////////////////////////////////////////////////////////////////////////////
// Automatically quote the referenced post when you perform a quick reply //
////////////////////////////////////////////////////////////////////////////
if (isCurrentPage("showthread.php") && opt_autoQuoteQuickReply) {
	cbs = document.getElementsByName('quickreply');
	cbs[0].checked = "yes";
}

//////////////////////////////////////////////////////////////////
// Immediately redirect back to title after a thread is ignored //
//////////////////////////////////////////////////////////////////
if (isCurrentPage("cis_ignore_thread.php") /*&& opt_immediateRedirectAfterIgnoreThread*/) {
	// Go back.
	history.back();
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
		if ((thisLink.parentNode.parentNode.id.indexOf('td_threadtitle_')==0)) {
			if (thisLink.style.fontWeight=="bold") {
				if (opt_unboldThreadTitles) {
					thisLink.style.fontWeight="normal";
				}
			}
			else {
				if (opt_grayReadThreads) {
					thisLink.style.color="#666666";
				}
			}
		}

	}
}

////////////////////////////////////////
// Remove UFCK logo from top of page. //
////////////////////////////////////////
if (opt_removeLogo) {
	// Find the ufck logo
	var allImages = document.evaluate('//img', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	var thisImage;
	for (var i = 0; i < allImages.snapshotLength; i++) {
		thisImage = allImages.snapshotItem(i);
		if (thisImage.src=='http://ufck.org/forums/classic_images/ufck/v2.gif') {
			// Nuke the table it's in.
			thisImage.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(thisImage.parentNode.parentNode.parentNode.parentNode);
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

///////////////////////////////////////////////////
// Remove Check out what subforums we have tbody //
///////////////////////////////////////////////////
if (isCurrentPage('forumdisplay.php') && opt_removeCheckOutSubforumsMessage)
{
	var checkoutSubsRemoved = false;
	var allInstances, thisInstance;
	allInstances = document.evaluate('//tbody', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
	for (var i = 0; i < allInstances.snapshotLength; i++) {
	    thisInstance = allInstances.snapshotItem(i);
	    if (
	    	// This is the tbody to remove, ...
	    	(thisInstance.innerHTML.indexOf('Check out what subforums we have') != -1 ) &&
	    	(! checkoutSubsRemoved)
	    ) {
	    	thisInstance.innerHTML = '';
	    	checkoutSubsRemoved = true;
	    }
	}
}

///////////////////////
// Compact Subforums //
///////////////////////
if (isCurrentPage('forumdisplay.php') && opt_compactSubforumsBox) {
	// Create arrays for subforum data.
	var myForumNames = [];
	var myLastThreads = [];
	var myLastPosters = [];
	var myLastTimes = [];
	
	// Get data
	var theTDs = document.getElementsByTagName('td');
	for (var tdIndex = 0; tdIndex < theTDs.length; tdIndex++) {
		// See if the TD is a subforum TD
		//if (theTDs[tdIndex].className == 'alt1Active' && theTDs[tdIndex].id.indexOf('f') == 0) {
		if (theTDs[tdIndex].className == 'alt1Active' || theTDs[tdIndex].className == 'alt1' || theTDs[tdIndex].className == 'alt2') {
			var newHTML = theTDs[tdIndex].innerHTML;
			var prefix = '<a href="forumdisplay.php?f=';
			var prefixIndex = newHTML.indexOf(prefix);
			var suffix = '</strong></a>';
			var suffixIndex = newHTML.indexOf(suffix, prefixIndex + prefix.length);
			
			if (prefixIndex >= 0 && suffixIndex >= 0) {
				var forumName = newHTML.substring(
					prefixIndex,
					suffixIndex + suffix.length
				);
				myForumNames.push (forumName);
			}
			prefix = '<a href="showthread.php?goto=newpost&amp;t=';
			prefixIndex = newHTML.indexOf(prefix);
			suffix = '</strong></a></span>';
			suffixIndex = newHTML.indexOf(suffix, prefixIndex + prefix.length);
			if (prefixIndex >= 0 && suffixIndex >= 0) {
				var threadName = newHTML.substring (
					prefixIndex,
					suffixIndex + suffix.length
				);
				myLastThreads.push (threadName);
			}
			
			prefix = '<a href="member.php?find=lastposter&amp;f=';
			prefixIndex = newHTML.indexOf(prefix);
			suffix = '</a>';
			suffixIndex = newHTML.indexOf(suffix, prefixIndex + prefix.length);
			if (prefixIndex >= 0 && suffixIndex >= 0) {
				var posterName = newHTML.substring (
					prefixIndex,
					suffixIndex + suffix.length
				);
				myLastPosters.push (posterName);
				
				nodeToRemove = theTDs[tdIndex].parentNode.parentNode.parentNode;
			}
			
			prefix = '<span class="time">';
			prefixIndex = newHTML.indexOf(prefix);
			suffix = '</span>';
			suffixIndex = newHTML.indexOf(suffix, prefixIndex + prefix.length);
			if (prefixIndex >= 0 && suffixIndex >= 0) {
				var posterName = newHTML.substring (
					prefixIndex,
					suffixIndex + suffix.length
				);
				myLastTimes.push (posterName);
				
				nodeToRemove = theTDs[tdIndex].parentNode.parentNode.parentNode;
			}
		}
	}
	
	var nrCols=myForumNames.length;
	var tbo=document.createElement('tbody');
	var row, cell;
	var exTable = document.getElementsByTagName('table')[8];
	var topTable = document.getElementsByTagName('table')[7];
	topTable.parentNode.removeChild(topTable);
	var numRowsBefore = exTable.rows.length;
	while (exTable.rows.length > 0)
		exTable.deleteRow(0);
	row = exTable.insertRow(row);
	exTable.className="alt2Active";
	row.className="alt2";
	for(var j=0;j<nrCols;j++){
		cell=document.createElement('td');
		cell.style.textAlign="center";
		cell.innerHTML =
			myForumNames[j] + '<br />' +
			'Last post in ' + myLastThreads[j] + '<br />' +
			'by ' + myLastPosters[j] + ' @ ' + myLastTimes[j];
		row.appendChild(cell);
	}
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
	  if (
			// This is a link to a thread, and...
	    (thisLink.href.indexOf('showthread.php?t=') != -1 ) &&
	   	// it links to the first page of said thread, and...
	   	(thisLink.href.indexOf('page=') == -1 ) &&
	   	// The link text is not a number (it would be 1)...
	   	(isNaN(thisLink.innerHTML))
	  ) {
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
			var node1 = document.createElement('tr');
			var node2 = document.createElement('td');
			node2.setAttribute('class', 'vbmenu_option');
			var node3 = document.createElement('a');
			node3.setAttribute('href', 'profile.php?do=addlist&userlist=ignore&u=' + userID);
			node3.innerHTML = 'Add to ignore list';
			node2.appendChild(node3);
			node1.appendChild(node2);
			// Add the table row.
			thisMemberSection.parentNode.parentNode.parentNode.appendChild(node1, thisMemberSection);
		}
	}
}

/////////////////////////////////////////////////////////
// Auto-scrolling! //
/////////////////////////////////////////////////////////
//if (isCurrentPage('showthread.php'))
//{
	var screensLeftBeforeLoad = 4.5;
	var nextURL = null; // the URL for next, or null for pending/none
	var nextLinkNode = null; // the node of the "Next" link
	var mainTable = null;
	window.addEventListener("load", init, false);

	// Check the scroll position on a timer because we can't use onscroll (bug 189308).
	// If we do switch to onscroll, remember to call testScrollPosition after changing the page.
	setInterval(testScrollPosition, 100);

	function init()
	{
		mainTable = findMainTable(document);
		nextLinkNode = findNextLink(document);
		setNextURL(document);
	}

	function testScrollPosition()
	{
		if ((nextURL != null) && ((document.documentElement.offsetHeight - document.documentElement.scrollTop) < (screensLeftBeforeLoad * window.innerHeight))) {
			// We're near the bottom of the page; one press of pgdn could get close to the bottom of the page.
			// (At about 1.9 * window.innerHeight, one press of pgdn would actually hit the bottom of the page.)
			if (opt_autoScrolling)
				pullMore();
		}
	}

	function pullMore()
	{
		var iframe = document.createElement("iframe");
		iframe.addEventListener("load", whee, false);
		iframe.width = 1;
		iframe.height = 1;
		iframe.style.visibility = "hidden";
		iframe.src = nextURL;
		document.body.appendChild(iframe);

	  	// Don't pull this more than once.
	  	nextURL = null;

	  	function whee() {
		    var iframeDoc = iframe.contentDocument;

		    // Update nextURL for when we reach the bottom of the page again.
		    setNextURL(iframeDoc);

		    // Update the "Next" link in the page to make it a little less confusing.
		    // Commented out because updating the "Next" link at the top of the page but not the one at
		    // the bottom of the page is no good.
		    // nextLinkNode.href = nextURL || "javascript:alert('No more!')";

		    // no quick reply on Invision boards
		    //removeQuickReply(mainTable);

		    // Move posts into the main page's table.
		    siphon(findMainTable(iframeDoc), mainTable);

		    // Get rid of the iframe to free memory once it's GCed and so on.
		    // Use a setTimeout to work around bug 305471 and to spread out the CPU usage to keep Firefox responsive.
		    setTimeout( function() { iframe.parentNode.removeChild(iframe); }, 1500);
	  	}
	}

	function findMainTable(doc)
	{
		// posts are contained in a div#posts (very sensible)

		for (var div,i=0; div=doc.getElementsByTagName("div")[i]; ++i) {
			if (div.id == "posts") {
				return div;
			}
		}
		return null;
	}

	function findNextLink(doc)
	{
		for (var link,i=0; link=doc.links[i]; ++i)
			if (
				(link.innerHTML == ">" || link.text == ">") &&
				(link.getAttribute("href").indexOf("showthread.php?") != -1 || link.getAttribute("href").search(/\/\d+.*-\d+\.html?$/) != -1 )
			)
			{
				return link;
			}
		return null;
	}

	function setNextURL(doc)
	{
		var nextLink = findNextLink(doc)
		if (nextLink)
			nextURL = nextLink.href;
	}

	// Active topics have a "Quick Reply" textarea at the bottom of each page.
	// This function removes it so you only have to see the last "Quick Reply" box on the page.
	function removeQuickReply(table)
	{
		var lastRow = lastRowOf(table);
		if (lastRow.getElementsByTagName("textarea")[0] != null) {
	    	lastRow.parentNode.removeChild(lastRow);

	    	// Remove the second-to-last row too.
	    	var lastRow = lastRowOf(table);
	    	lastRow.parentNode.removeChild(lastRow);
		}
	}

	function lastRowOf(table)
	{
		return table.tBodies[0].rows[table.tBodies[0].rows.length - 1];
	}

	function siphon(sourceTable, destTable)
	{
		var child;
		while ((child = sourceTable.childNodes[0]))
			destTable.appendChild(child);
	}
//}