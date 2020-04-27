import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import { WebView } from 'react-native-webview'
import { WebViewNavigationEvent } from 'react-native-webview/lib/WebViewTypes'
// @ts-ignore
import { html } from './html'

const data = {
  data: {
    values: [
      { a: 'C', b: 2 },
      { a: 'C', b: 7 },
      { a: 'C', b: 4 },
      { a: 'D', b: 1 },
      { a: 'D', b: 2 },
      { a: 'D', b: 6 },
      { a: 'E', b: 8 },
      { a: 'E', b: 4 },
      { a: 'E', b: 7 },
    ],
  },
  layer: [
    {
      mark: 'bar',
      encoding: {
        x: { field: 'a', type: 'nominal' },
        y: {
          aggregate: 'average',
          field: 'b',
          type: 'quantitative',
          axis: { title: 'Average of b' },
        },
        color: { value: '#ff9900' },
      },
    },
    {
      mark: 'line',
      encoding: {
        x: { field: 'a', type: 'nominal' },
        y: {
          aggregate: 'average',
          field: 'b',
          type: 'quantitative',
          axis: { title: 'Average of b' },
        },
      },
    },
    {
      mark: 'point',
      encoding: {
        x: { field: 'a', type: 'nominal' },
        y: { field: 'b', type: 'quantitative' },
      },
    },
  ],
}

export default function App() {
  const [ref, setRef] = React.useState<WebView>()
  const onLoad = (e: WebViewNavigationEvent) => {
    if (!!ref) {
      // @ts-ignore
      ref.postMessage(JSON.stringify(data))
    }
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <WebView
          ref={(c) => {
            // @ts-ignore
            setRef(c)
          }}
          style={{ width: 360 }}
          originWhitelist={['*']}
          source={{
            html: html as string,
          }}
          // @ts-ignore
          onLoad={onLoad}
        />
        <Button
          title="spec"
          onPress={() => {
            if (!!ref) {
              // @ts-ignore
              ref.postMessage(JSON.stringify(data))
            }
          }}
        />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
