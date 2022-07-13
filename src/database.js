import sanityClient from '@sanity/client'

export default sanityClient({
    "projectId": "1y5aj0uu",
    "dataset": "production",
    apiVersion: '2021-06-07',
    dataset: 'production',
    token: 'skLruGclEr24Ma4DgBvxjSoaEztDmtpXnxgfxzsIGKaZWqzjaZ1vNGpvy0OBIPnYCsWDzSRe1gl75VFLQDOJROsJncqYiH2JvvIhVSHreWyZc7yepcdP7c98w3mqIPYAm9AtdkK5CwreNYsYCquFbrv6wXgdfeI638wIqjKntlKFwqhTgH7f', 
    useCdn: true,
    ignoreBrowserTokenWarning: true,
})

// https://1y5aj0uu.api.sanity.io/v2021-06-07/data/export/production/