const cookie = {
  read(name: string): string | null {
    const re = new RegExp('(^|;s*)(' + name + ')=([^;]*)')
    const match = document.cookie.match(re)
    return match ? decodeURIComponent(match[3]) : ''
  }
}

export default cookie
