export const serviceErrors = errors => {
  const { response } = errors;

  if (response) {
    const { status, data } = response;

    if ((status >= 400 && status < 500) && data) {
      if (status === 404) {
        return { status, text: "Page not found" }
      }

      return data.errors
    } else if (status === 500) {
      return { status, text: "Server error" }
    }

    return { status, text: "Something went wrong. Try later" }
  }
}