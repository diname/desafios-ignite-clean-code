const listOfUserCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50
  },
  {
    title: 'Famous',
    followers: 500
  },
  {
    title: 'Super Star',
    followers: 1000
  }
]

export default async function getGithubUserByUsername(req, res) {
  const githubUsername = String(req.query.username)

  if (!githubUsername) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubResponseUser = await fetch(
    `https://api.github.com/users/${githubUsername}`
  )

  if (githubResponseUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsername}" not found`
    })
  }

  const githubUser = await githubResponseUser.json()

  const orderedCategoryList = listOfUserCategories.sort(
    (a, b) => b.followers - a.followers
  )

  const githubUserCategory = orderedCategoryList.find(
    (i) => githubUser.followers > i.followers
  )

  const result = {
    githubUsername,
    category: githubUserCategory.title
  }

  return result
}

getGithubUserByUsername(
  {
    query: {
      username: 'josepholiveira'
    }
  },
  {}
)
