//
//  HYReactNativeManager.h
//  RNProject
//
//  Created by 许伟杰 on 2019/5/20.
//  Copyright © 2019 JackXu. All rights reserved.
//
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface HYReactNativeManager : NSObject<RCTBridgeDelegate>

+ (instancetype)shareInstance;

// 全局唯一的bridge
@property (nonatomic, readonly, strong) RCTBridge *bridge;

@end

NS_ASSUME_NONNULL_END
