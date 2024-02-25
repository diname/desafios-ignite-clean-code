function UpdateUserRoute(body, params) {
  const { name, email, password } = body
  const { id } = params
  UpdateUserController({
    data: {
      name,
      email,
      password
    },
    params: {
      id
    }
  })
}

function UpdateUserController({ data, params }) {
  const { name, email, password } = data
  const { id } = params

  UserRepository.update({
    data: {
      name,
      email,
      password
    },
    params: {
      id
    }
  })
}

const UserRepository = {
  update: ({ data, params }) => {}
}
