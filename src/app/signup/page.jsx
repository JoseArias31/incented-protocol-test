


export default async function SignUp() {
    return (
      <div className="flex items-center justify-center h-screen">
  <form action="/auth/sign-up" method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
  <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="border border-black w-full py-2 px-3 leading-tight focus:outline-none focus:border-teal-500"
        name="email"
        type="text"
        placeholder="Email"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="border border-black w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-teal-500"
        name="password"
        type="password"
        placeholder="Password"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input
        className="border border-black w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-teal-500"
        name="username"
        type="text"
        placeholder="Username"
      />
    </div>
    {/* <input type="hidden" name="userId" value={user.id} /> */}
    <div className="flex items-center justify-between">
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Sign Up
      </button>
    </div>
  </form>
</div>
    )
  }
// export default function SignUp() {
//   return (
//     <form action="/auth/login" method="post">
//       <label htmlFor="email">Email</label>
//       <input name="email" />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" />
//       <button>Sign In</button>
//       <button formAction="/auth/logout">Sign Out</button>
//       <button formAction="/auth/sign-up">Sign Up</button>
//     </form>
//   )
// }
