const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1")
    await cache.addAll(resources)
}

self.addEventListener("fetch", (event) => {
    return event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    )
})

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/index.html",
            "/dollar.png",
            "/sw.js"
        ])
    )
})