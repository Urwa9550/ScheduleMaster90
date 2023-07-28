//
//  BluetoothDevices.m
//  app
//
//  Created by Urwa on 27/07/2023.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(BluetoothDevices, NSObject)
  RCT_EXTERN_METHOD(fetchBluetoothDevices:
    (RCTResponseSenderBlock) callback
  )
@end

