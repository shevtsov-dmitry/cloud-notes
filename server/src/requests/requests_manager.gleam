import ewe
import gleam/http/request
import gleam/http/response
import gleam/list
import gleam/result
import gleam/string
import requests/url_resolver.{type UrlResolver}

pub fn handler(
  request: request.Request(ewe.Connection),
) -> response.Response(ewe.ResponseBody) {
  let path =
    request.path
    |> string.split("/")

  let url_resolver = url_resolver.new(request)

  let url_resolver: UrlResolver = case list.is_empty(params) {
    True -> {
      url_resolver |> url_resolver.path(path)
    }
    False -> {
      let path_without_params =
        path
        |> list.take_while(fn(current_item) {
          path
          |> list.last()
          |> result.unwrap("")
          != current_item
        })

      url_resolver
      |> url_resolver.path(path_without_params)
    }
  }
  // let response.new() |>
}

pub type SupportedPath {
  Notes
  Accounts
}

pub type UnsupportedPath {
  UnsupportedPath
}

fn parse_paths(
  url_resolver: UrlResolver,
) -> Result(SupportedPath, UnsupportedPath) {
  let path =
    url_resolver.path
    |> list.first()
  case path {
    Error -> {
      Error(UnsupportedPath)
    }
    other -> {
      Ok(other)
    }
  }
}

pub fn dispatcher(
  url_resolver: UrlResolver,
) -> reponse.Response(ewe.ResponseBody) {
  let path =
    url_resolver.path
    |> list.first()
    |> result.unwrap("")
}
