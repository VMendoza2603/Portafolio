"use server"

import type { GitHubRepo, GitHubRepoLang, GitHubUser } from "@/types/github"

const GITHUB_USERNAME = "VMendoza2603"
const GITHUB_API = "https://api.github.com"

export async function fetchUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function fetchRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const repos: GitHubRepo[] = await res.json()
    return repos.filter((repo) => !repo.fork && !repo.private)
  } catch {
    return []
  }
}

export async function fetchRepoLanguages(owner: string, repo: string): Promise<GitHubRepoLang> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/languages`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return {}
    return res.json()
  } catch {
    return {}
  }
}

export async function fetchRepoReadme(owner: string, repo: string): Promise<string | null> {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${owner}/${repo}/readme`, {
      headers: { Accept: "application/vnd.github.raw+json" },
      next: { revalidate: 86400 },
    })
    if (!res.ok) return null
    return res.text()
  } catch {
    return null
  }
}
