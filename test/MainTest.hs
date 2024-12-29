import Test.HUnit
import MyLib (myMethod)

testMyMethod :: Test
testMyMethod = TestCase $ assertEqual "Should return 'Hello, Haskell!'" "Hello, Haskell!" myMethod

main :: IO ()
main = do
    counts <- runTestTT testMyMethod
    print counts
