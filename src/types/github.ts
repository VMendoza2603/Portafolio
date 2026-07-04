export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
  private: boolean
  fork: boolean
  size: number
}

export interface GitHubRepoLang {
  [language: string]: number
}

export interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string | null
  bio: string | null
  location: string | null
  blog: string
  public_repos: number
  followers: number
  following: number
  created_at: string
}
