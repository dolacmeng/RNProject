
//
//  HYReactNativeManager.m
//  RNProject
//
//  Created by 许伟杰 on 2019/5/20.
//  Copyright © 2019 JackXu. All rights reserved.
//

#import "HYReactNativeManager.h"

@implementation HYReactNativeManager

static HYReactNativeManager *_instance = nil;
+ (instancetype)shareInstance{
    if (_instance == nil) {
        _instance = [[self alloc] init];
    }
    return _instance;
}

+ (instancetype)allocWithZone:(struct _NSZone *)zone{
    if (_instance == nil) {
        static dispatch_once_t onceToken;
        dispatch_once(&onceToken, ^{
            _instance = [super allocWithZone:zone];
        });
    }
    return _instance;
}

-(instancetype)init{
    if (self = [super init]) {
        _bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
    }
    return self;
}

#pragma mark - RCTBridgeDelegate
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
# if DEBUG
        return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"
                                                              fallbackResource:nil];
# else
    return [[NSBundle mainBundle] URLForResource:@"index" withExtension:@"jsbundle"];
#endif
}

@end
