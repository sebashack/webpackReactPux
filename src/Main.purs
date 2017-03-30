module Main where


import Prelude
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)
import Signal.Channel
import Control.Monad.Eff.Exception (EXCEPTION)
import Pux (start, fromSimple, renderToDOM)
import Counter (update, view)


main :: forall e. Eff ( console :: CONSOLE
                      , channel :: CHANNEL
                      , err :: EXCEPTION | e ) Unit
main = do
  app <- start
    { initialState: 0
    , update: fromSimple update
    , view: view
    , inputs: [] }
  renderToDOM "#app" app.html
