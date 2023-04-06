//grabs the name and email of user from form then outputs message
const resultList = document.getElementById('contact')
new URLSearchParams(windows.location.search).forEach((email,
name) => {
 resultList.append(`${name}: ${email}`)
 resultList.append(document.createElement('br'))
})