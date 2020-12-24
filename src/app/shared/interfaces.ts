export interface User {
  email: string
  password: string
  returnSecureToken?: boolean

}

export interface FbAuthResponse {
  idToken: string
}

export interface Post {
  id?: string
  type: string
  name: string
  about: string
  place: string

}

export interface FbCreateResponse {
  name: string
}
