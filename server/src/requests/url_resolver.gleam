import ewe
import gleam/http/request.{type Request}

pub type UrlResolver {
  UrlResolver(
    request: Request(ewe.Connection),
    path: String,
    params: List(String),
  )
}

pub fn new(request: Request(ewe.Connection)) -> UrlResolver {
  UrlResolver(request: request, path: "", params: [])
}

pub fn path(url_resolver: UrlResolver, path: String) -> UrlResolver {
  UrlResolver(..url_resolver, path: path)
}

pub fn params(url_resolver: UrlResolver, params: List(String)) -> UrlResolver {
  UrlResolver(..url_resolver, params: params)
}
