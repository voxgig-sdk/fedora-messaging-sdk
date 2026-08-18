<?php
declare(strict_types=1);

// FedoraMessaging SDK configuration

class FedoraMessagingConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FedoraMessaging",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://apps.fedoraproject.org/datagrepper/v2",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "search" => [],
                ],
            ],
            "entity" => [
        'search' => [
          'fields' => [
            [
              'name' => 'category',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'i',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'msg',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'msg_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timestamp',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'topic',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'username',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'search',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'agent',
                        'orig' => 'agent',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'bodhi',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 172800,
                        'kind' => 'query',
                        'name' => 'delta',
                        'orig' => 'delta',
                        'type' => '`$NUMBER`',
                      ],
                      [
                        'example' => '2021-06-25T06:11:40+00:00',
                        'kind' => 'query',
                        'name' => 'end',
                        'orig' => 'end',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'not_agent',
                        'orig' => 'not_agent',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'buildsys',
                        'kind' => 'query',
                        'name' => 'not_category',
                        'orig' => 'not_category',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'not_package',
                        'orig' => 'not_package',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'not_topic',
                        'orig' => 'not_topic',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'not_user',
                        'orig' => 'not_user',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'desc',
                        'kind' => 'query',
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'nethack',
                        'kind' => 'query',
                        'name' => 'package',
                        'orig' => 'package',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 2,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'rows_per_page',
                        'orig' => 'rows_per_page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => '2021-06-25T06:11:39+00:00',
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'topic',
                        'orig' => 'topic',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'toshio',
                        'kind' => 'query',
                        'name' => 'user',
                        'orig' => 'user',
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'agent',
                      'category',
                      'delta',
                      'end',
                      'not_agent',
                      'not_category',
                      'not_package',
                      'not_topic',
                      'not_user',
                      'order',
                      'package',
                      'page',
                      'rows_per_page',
                      'start',
                      'topic',
                      'user',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FedoraMessagingFeatures::make_feature($name);
    }
}
