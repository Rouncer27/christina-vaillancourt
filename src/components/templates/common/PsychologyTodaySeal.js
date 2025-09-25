import React, { useEffect } from "react"

const PsychologyTodaySeal = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://member.psychologytoday.com/verified-seal.js"
    script.type = "text/javascript"
    script.async = true
    script.setAttribute("data-badge", "14")
    script.setAttribute("data-id", "115146")
    script.setAttribute(
      "data-code",
      "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xNC9wcm9maWxlLzExNTE0Nj9jYWxsYmFjaz1zeGNhbGxiYWNr"
    )

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <a
      href="https://www.psychologytoday.com/profile/115146"
      className="sx-verified-seal"
    ></a>
  )
}

export default PsychologyTodaySeal
